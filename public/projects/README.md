Project screenshots live in this folder.

## Add Or Replace A Screenshot

1. Open the deployed project in your browser.
2. Take a screenshot of the main page or best feature screen.
3. Crop it to a wide 16:9 shape if possible.
4. Save it as PNG, JPG, WEBP, or SVG.
5. Put it in this folder.
6. In `constants.js`, set the project image path, for example:

```js
image: {
  src: '/projects/aureva-ecommerce.png',
  alt: 'Aureva e-commerce product page screenshot',
},
```

Recommended size: `1600x900`.

## File Naming

Use lowercase names with hyphens:

- `faisal-fareed-woods.png`
- `aureva-ecommerce.png`
- `law-surface.png`
- `skill-match.png`

Paths inside `constants.js` always start with `/projects/`, not `public/projects/`.
