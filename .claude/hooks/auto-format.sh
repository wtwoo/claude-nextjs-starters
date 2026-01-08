#!/bin/bash
# 파일 저장 후 자동 포맷팅 (Prettier, ESLint)

set -e

input=$(cat)
file_path=$(echo "$input" | jq -r '.tool_input.file_path')

# 지원하는 파일 확장자 확인
if ! echo "$file_path" | grep -qE '\.(ts|tsx|js|jsx|json|md|mdx)$'; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# 파일이 존재하는지 확인
if [ ! -f "$file_path" ]; then
  exit 0
fi

# Prettier 실행
npx prettier --write "$file_path" 2>/dev/null && echo "✓ Prettier 적용됨" >&2 || true

# ESLint 실행
npx eslint --fix "$file_path" 2>/dev/null && echo "✓ ESLint 적용됨" >&2 || true

exit 0
