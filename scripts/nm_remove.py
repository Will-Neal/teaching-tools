import os

os.system("find . -name 'node_modules' -type d -prune")

# find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + WHERE '{}' is a placeholder which find replaces with the file path it found, while + tells find to append all the file paths to a single command, rather than running rm for each