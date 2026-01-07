#!/bin/bash

# Claude Code Stop Hook
# 작업 완료 시 Slack으로 알림을 전송합니다

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
session_id=$(echo "$hook_input" | jq -r '.session_id' | cut -c1-8)
cwd=$(echo "$hook_input" | jq -r '.cwd // "Unknown"')
timestamp=$(date '+%Y-%m-%d %H:%M:%S')

# 작업 디렉토리 경로 단축 (너무 길 경우)
if [ ${#cwd} -gt 80 ]; then
  cwd_display="...${cwd: -77}"
else
  cwd_display="$cwd"
fi

# Slack 메시지 JSON 구성
slack_payload=$(cat <<EOF
{
  "channel": "$SLACK_CHANNEL",
  "username": "Claude Code",
  "icon_emoji": ":robot_face:",
  "text": "작업 완료 알림",
  "attachments": [
    {
      "color": "good",
      "title": "✓ 작업 완료",
      "fields": [
        {
          "title": "세션 ID",
          "value": "$session_id",
          "short": true
        },
        {
          "title": "완료 시간",
          "value": "$timestamp",
          "short": true
        },
        {
          "title": "작업 디렉토리",
          "value": "$cwd_display",
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
