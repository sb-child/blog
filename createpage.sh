#!/bin/sh

__FILE__=src/posts/$(pwgen -s 16 1).md

if test -f "$__FILE__"; then
    echo "$__FILE__ exists, please try again."
    exit 1
fi

echo "---" > "$__FILE__"
echo "date: $(date --iso-8601)" >> "$__FILE__"
echo "category:" >> "$__FILE__"
echo "  - \"draft/草稿\"" >> "$__FILE__"
echo "tag:" >> "$__FILE__"
echo "  - \"draft\"" >> "$__FILE__"
echo "lang: \"zh-CN\"" >> "$__FILE__"
echo "---" >> "$__FILE__"
echo "" >> "$__FILE__"
echo "<!-- more -->" >> "$__FILE__"
echo "" >> "$__FILE__"
echo "# 标题" >> "$__FILE__"
echo "" >> "$__FILE__"
echo "正文" >> "$__FILE__"

echo "$__FILE__ is created."

if [ $TERM_PROGRAM == "vscode" ]; then
  echo "Opening this file in VSCode..."
  code -r --goto "$__FILE__:13:0"
fi
