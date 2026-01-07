#!/bin/bash

# Claude Code PermissionRequest Hook
# 권한 요청 시 Slack으로 알림을 전송합니다

# .env 파일에서 환경변수 로드
ENV_FILE="$CLAUDE_PROJECT_DIR/.claude/.env"
if [ -f "$ENV_FILE" ]; then
  set -a
  . "$ENV_FILE"
  set +a
fi

# 환경변수에서 Webhook URL과 채널명 가져오기
if [ -z "$SLACK_WEBHOOK_URL" ]; then
  echo "⚠ 경고: SLACK_WEBHOOK_URL이 설정되지 않았습니다" >&2
  exit 0
fi

if [ -z "$SLACK_CHANNEL" ]; then
  echo "⚠ 경고: SLACK_CHANNEL이 설정되지 않았습니다" >&2
  exit 0
fi

# stdin에서 Hook 데이터 읽기
hook_input=$(cat)

# 데이터 추출
tool_name=$(echo "$hook_input" | jq -r '.tool_name // "Unknown"')
session_id=$(echo "$hook_input" | jq -r '.session_id' | cut -c1-8)

# 도구별 세부 정보 추출 및 색상 설정
color="warning"
details=""

case "$tool_name" in
  "Write")
    file_path=$(echo "$hook_input" | jq -r '.tool_input.file_path // "N/A"')
    details="파일 생성: $file_path"
    color="danger"
    ;;
  "Edit")
    file_path=$(echo "$hook_input" | jq -r '.tool_input.file_path // "N/A"')
    details="파일 수정: $file_path"
    color="danger"
    ;;
  "Bash")
    command=$(echo "$hook_input" | jq -r '.tool_input.command // "N/A"')
    # 긴 명령어는 잘라내기
    if [ ${#command} -gt 100 ]; then
      command="${command:0:100}..."
    fi
    details="명령어: $command"
    color="warning"
    ;;
  *)
    tool_input=$(echo "$hook_input" | jq -r '.tool_input | keys | join(", ")' 2>/dev/null)
    if [ -n "$tool_input" ] && [ "$tool_input" != "null" ]; then
      details="도구 입력: $tool_input"
    else
      details="권한 요청"
    fi
    color="warning"
    ;;
esac

# Slack 메시지 JSON 구성
slack_payload=$(cat <<EOF
{
  "channel": "$SLACK_CHANNEL",
  "username": "Claude Code",
  "icon_emoji": ":robot_face:",
  "text": "권한 요청 알림",
  "attachments": [
    {
      "color": "$color",
      "title": "권한 요청: $tool_name",
      "fields": [
        {
          "title": "도구",
          "value": "$tool_name",
          "short": true
        },
        {
          "title": "세션",
          "value": "$session_id",
          "short": true
        },
        {
          "title": "상세",
          "value": "$details",
          "short": false
        }
      ],
      "footer": "Claude Code Hooks",
      "ts": $(date +%s)
    }
  ]
}
EOF
)

# Slack으로 전송
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data "$slack_payload" \
  --silent \
  --show-error \
  2>/dev/null

exit 0
