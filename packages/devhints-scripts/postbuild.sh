#!/usr/bin/env sh
# Run this in `public/` after a build.

# Unroll foo/index.html -> foo.html
for fn in */*.html; do
    dest=${fn/\/index/}
    dir=${dest/.html/}
    mv "$fn" "$dest"
    rmdir "$dir" || true
done

# Remove JavScript sourcemaps
rm *.map
