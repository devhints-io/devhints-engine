#!/usr/bin/env sh
# Run this in `public/` after a build.

# Disabled for now
exit

# Unroll foo/index.html -> foo.html
for fn in */*.html; do
    dest=${fn/\/index/}
    dir=${dest/.html/}
    mv "$fn" "$dest"
    rmdir "$dir" &>/dev/null || true
done

# Remove JavScript sourcemaps
rm *.map
