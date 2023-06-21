# Megali's landing page

Just some html and css for the landing page.

## Development

We use tailwindcss as a css framework. Let's install it so we can develop:

```bash
npm install
```

After installing, we can run:

```bash
npm run dev
```

This will build the css so we can use in the html template.

For serving the html, I'm using python http server.

```bash
python3 -m http.server
```

## Deployment

We're using github pages for serving the html.
There is an github action that deploys the html to github pages on pushes to main.

That is all. :)
