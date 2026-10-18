# joshuaodubu.com

Personal portfolio of Joshua Odubu, frontend web developer and ICT & AV specialist in Birmingham, UK.

Live site: https://joshuaodubu.com

## Stack

Plain HTML and CSS. No framework, no JavaScript, no build step.

- **Type:** Atkinson Hyperlegible Next and Mono, self-hosted (no third-party requests)
- **Images:** WebP
- **Dark mode:** follows the visitor's system setting
- **Hosting:** GitHub Pages from `main`, served at joshuaodubu.com (see `CNAME`)
- **Checks:** `.github/workflows/check-site.yml` validates HTML and checks links on every push and weekly

## Structure

```
index.html                    Home: hero, projects, experience, writing, contact
writing/index.html            Post list
writing/<slug>.html           Posts
404.html
assets/css/style.css          All styles; design tokens at the top
assets/fonts/                 Self-hosted woff2
assets/img/                   Photo, project screenshots, social preview image
docs/Joshua-Odubu-CV.pdf
CNAME  _config.yml  robots.txt  sitemap.xml  favicons
aboutme.html, blog.html, ...  Redirects from the old site's URLs
```

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening the files directly also works, except the 404 page.)

## Add a blog post

1. Copy `writing/from-helpdesk-to-code.html` to `writing/<new-slug>.html` and replace the title, description, canonical URL, date and body.
2. Add an entry to the list in `writing/index.html` (and the Writing section in `index.html` if it should appear on the homepage).
3. Add the URL to `sitemap.xml`.

## Deploy

Push to `main`. GitHub Pages rebuilds the site in about a minute.

To check HTML before pushing:

```sh
npx html-validate *.html writing/*.html
```
