# Reel Room blog routes (archived)

These page files were removed from `src/pages/` so the blog is not publicly reachable. Old URLs are redirected to the homepage via `next.config.js`.

**Contents**

- `blog.tsx` — blog index
- `blog/` — dynamic `/blog/[slug]` posts
- `blog-articles/` — article pages under `/blog-articles/...`

**To restore the blog later**

1. Move this folder’s contents back under `src/pages/` (same names: `blog.tsx`, `blog/`, `blog-articles/`).
2. In `next.config.js`, remove the `source` entries that redirect `/blog` and `/blog-articles` to `/`.
3. Re-add the **Blog** link in `src/components/ReelRoomNavigation.tsx` and `src/components/ReelRoomFooter.tsx` (see git history if needed).
4. Run `npm run build` and deploy.

**Note:** Archived copy uses the same screen room wording and `screen-room.jpg` assets as the live site, so a restore stays consistent with current language.
