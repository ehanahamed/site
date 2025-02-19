
To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>


Full docs: https://sli.dev/


To build:
```sh
# if we're copying `slidev/dist/` to `site/ap-csa-stuff/unit-7-frq-1/`, use `--base`
pnpm exec slidev build ap-csa-unit-7-frq-1.md --base /ap-csa-stuff/unit-7-frq-1/
# check `slidev/dist/_redirects` and add it's contents into site/_redirects or site/netlify.toml
```
