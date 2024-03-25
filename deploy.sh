#!/bin/sh

# echo "Fetching list on remote..."
# ssh hws1 "cd /var/www/sbchild.top/blog/ ; find . -type f" > _diff_remote.txt

# echo "Fetching list on local..."
# cd dist/ && find . -type f > ../_diff_local.txt && cd - > /dev/null || exit 1

# echo "Preparing remove list..."
# python3 _deploy_helper.py > _diff_rm.txt || exit 2

# ssh hws1 "cd /var/www/sbchild.top/blog/ && echo \"$(cat _diff_rm.txt)\" | xargs -I{} rm -f \"{}\""

# ssh hws1 "cd /var/www/sbchild.top/blog/ && rm -f ./*"

echo "Uploading..."

rsync -r --progress -z --zl 9 --partial --checksum dist/* hws1:/var/www/sbchild.top/blog

echo "Deleting build id file..."

ssh hws1 "cd /var/www/sbchild.top/blog/ && rm -f ./build_*.txt"

echo "Uploading new build id file..."

rsync -r --progress -z --zl 9 --partial --checksum dist/build_*.txt hws1:/var/www/sbchild.top/blog
