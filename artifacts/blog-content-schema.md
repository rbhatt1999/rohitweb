# Blog Content Schema

All blog posts live in `src/app/api/blogs/blog.js` as a plain JS array. Categories live in `src/app/api/blogs/category.js`.

## Blog Post Object

```js
{
  id: 7,                        // integer, increment from last entry
  category_id: 1,               // FK to category.id (see category list below)
  title: `Post Title`,
  slug: `post-title`,           // URL slug — must be unique, URL-safe
  description: `One sentence.`, // Used in meta tags and list cards
  owner: `Rohit Bhatt`,
  date: '2024-03-15',           // YYYY-MM-DD, affects sort order
  tags: [`javascript`, `react`],
  image: {
    src: `https://website-images-rohitcodes.s3.ap-south-1.amazonaws.com/image.webp`,
    alt: `Image description`,
  },
  summary: `Paragraph shown as "30-sec summary" at top of post. HTML allowed.`,
  sections: [ /* see Section schema below */ ],
  advertisements: { show: false },
  referBlog: {
    show: true,
    title: `Related Post Title`,
    slug: `related-post-slug`,
  },
}
```

## Section Object

Each element of `sections[]` can have any combination of these keys (all optional):

```js
{
  h1: `Section heading (rendered as <h2>)`,
  h2: `Sub-heading (rendered as <h3>, accent color)`,
  p: `Paragraph text. HTML tags allowed — <br/>, <strong>, <a href="">links</a>.`,
  list: [
    {
      h1: `List item label (bold, accent color)`,  // optional
      p: `List item body text. HTML allowed.`,
    }
  ],
  image: {
    src: `https://...`,
    alt: `Alt text`,
    caption: `Optional caption shown below image`,  // optional
  },
  html: {
    type: 'code',
    language: 'javascript',   // any react-syntax-highlighter language string
    value: `const x = 1;`,
  },
  subSections: [ /* same shape as section, nested one level */ ],
}
```

## Category IDs

| id | name | slug |
|----|------|------|
| 1 | JavaScript | `javascript` |
| 2 | Ruby on Rails | `ruby-on-rails` |
| 3 | Personal Life | `personal-life` |
| 4 | Design Patterns | `design-patterns` |
| 5 | Artificial Intelligence | `artificial-intelligence` |
| 6 | Postgres | `postgres` |

## Rules

- `id` must be unique — check the last entry in `blog.js` and increment.
- `slug` must be unique and match the `title` in kebab-case.
- `date` controls display order — posts are sorted descending by date.
- HTML in `p` fields is parsed via `html-react-parser`. Use HTML entities for `<` / `>` in content: `&#60;` / `&#62;`.
- Code blocks require `{ html: { type: 'code', language, value } }` — use `CodeBlockViewer` in the renderer.
- Blog images should be uploaded to S3 bucket `website-images-rohitcodes` in the `ap-south-1` region as `.webp`.

## API Query Params

`GET /api/blogs`
- `?page=2` — 8 posts per page
- `?search=rails` — title search
- `?all=true` — skip pagination, return all

`GET /api/blogs/categories/:slug` — returns category + its posts.

`GET /api/blogs/archive/:YYYY-MM` — posts from that month.
