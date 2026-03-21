#!/bin/bash
set -e

URL="$1"
OUTPUT="$2"

if [ -z "$URL" ] || [ -z "$OUTPUT" ]; then
  echo "Usage: fetch-stitch.sh <url> <output_path>"
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT")"
curl -L -o "$OUTPUT" "$URL"
echo "Downloaded: $OUTPUT"
