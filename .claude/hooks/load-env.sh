#!/bin/bash

# Claude Code SessionStart Hook
# .claude/.env 파일에서 환경변수를 로드하여 CLAUDE_ENV_FILE에 추가
# 이렇게 하면 이후 모든 Bash 명령에서 환경변수를 사용할 수 있습니다

# SessionStart Hook에서만 CLAUDE_ENV_FILE이 설정됨
if [ -n "$CLAUDE_ENV_FILE" ]; then
  ENV_FILE="$CLAUDE_PROJECT_DIR/.claude/.env"

  if [ -f "$ENV_FILE" ]; then
    # .env 파일의 각 라인을 읽어서 CLAUDE_ENV_FILE에 export
    while IFS= read -r line || [ -n "$line" ]; do
      # 주석과 빈 줄 건너뛰기
      if [[ ! "$line" =~ ^[[:space:]]*# ]] && [[ -n "$line" ]]; then
        echo "export $line" >> "$CLAUDE_ENV_FILE"
      fi
    done < "$ENV_FILE"

    echo "✓ Claude Code 환경변수 로드 완료" >&2
  else
    echo "⚠ 경고: $ENV_FILE 파일이 없습니다" >&2
    echo "⚠ .claude/.env 파일을 생성하고 SLACK_WEBHOOK_URL을 설정해주세요" >&2
  fi
fi

exit 0
