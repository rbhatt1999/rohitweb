export const FEATURED = [
  {
    slug: 'sadhak-ai',
    pill: 'ai · latest',
    name: 'Sadhak AI',
    seoTitle: 'Sadhak AI — Gen AI Chat by Rohit Bhatt',
    seoDescription: "Sadhak AI is Rohit Bhatt's generative AI chat. It streams Gemini over SSE, with Google OAuth, Postgres threads, and rolling-summary context.",
    year: '2025',
    tag: "A privacy-first AI chat that streams Gemini's answers token by token.",
    desc: 'Google OAuth, per-user threads persisted in Postgres, and a rolling-summary context window so long conversations stay coherent without blowing the token budget.',
    body: [
      'Sadhak AI is a multi-user generative AI chat. Answers from Gemini stream to the browser token by token over Server-Sent Events, instead of waiting for a full completion.',
      'Sign-in is Google OAuth. Each person gets their own threads, stored in PostgreSQL. A rolling summary keeps older turns as a short recap and leaves the recent turns verbatim, so a long conversation stays coherent without overrunning the model window.',
      'The app is Python and Flask, with LangChain in front of Gemini, Pydantic structured outputs, and session and message APIs.',
    ],
    stack: ['flask', 'langchain', 'gemini', 'postgres', 'sse'],
    languages: ['Python', 'Flask', 'LangChain'],
    metrics: [
      { v: 'Gemini', l: 'model' },
      { v: 'SSE', l: 'transport' },
      { v: 'Postgres', l: 'threads' },
    ],
    github: 'https://github.com/rbhatt1999/sadhak-ai',
    related: [
      { href: '/categories/artificial-intelligence', label: 'Notes on artificial intelligence' },
      { href: '/blogs/building-the-future-a-developers-guide-to-agentic-ai-workflows-in-ruby', label: 'Agentic AI workflows in Ruby' },
      { href: '/work/stay-a-while', label: 'Stay a While, a full-stack marketplace' },
    ],
    panel: {
      title: 'sadhak ~ chat',
      stat: '● live',
      lines: [
        { h: '<span class="sym">▸</span> auth   <span class="ok">google · ok</span>' },
        { h: '<span class="sym">▸</span> thread <span class="dim">#1f8a · postgres</span>' },
        { h: '<span class="sym">▸</span> stream <span class="dim">gemini · sse</span> <span class="dots"><span>●</span><span>●</span><span>●</span></span>' },
      ],
      tail: [
        { cls: 'q', h: '<span class="dim">user ›</span> "explain rolling-summary memory"' },
        { cls: 'resp', h: '<span class="sym">└</span> Keeps the most recent turns verbatim, then folds older context into a compact recap — so the thread never overruns the model window.' },
        { h: '<span class="dim">streaming</span><span class="cursor-blink"></span>' },
      ],
      foot: '<span class="ok">200 OK</span> · gemini-1.5 · 38ms',
    },
  },
  {
    slug: 'stay-a-while',
    pill: null,
    name: 'Stay a While',
    seoTitle: 'Stay a While — Full-Stack App by Rohit Bhatt',
    seoDescription: 'Stay a While is a full-stack home-stay marketplace by Rohit Bhatt: a Ruby on Rails API, a React and Redux client, booking, and host dashboards.',
    year: '2024',
    tag: 'A home-stay marketplace — discovery, booking, and host dashboards end to end.',
    desc: 'A Rails API feeding a React + Redux client: search and filtering, a multi-step booking flow, host management dashboards, and a clean payments UI.',
    body: [
      'Stay a While is a home-stay marketplace: guests find a place, book it, and hosts manage their listings. The server is a Ruby on Rails API. The client is React and Redux.',
      'The product covers search and filtering, a multi-step booking flow, host management dashboards, and a payments UI with Stripe. The front end is deployed on Vercel.',
    ],
    stack: ['rails', 'react', 'redux', 'postgres'],
    languages: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React'],
    metrics: [
      { v: 'Rails', l: 'api' },
      { v: 'React', l: 'client' },
      { v: 'Stripe', l: 'payments' },
    ],
    live: 'https://stay-a-while-front-end.vercel.app/',
    github: 'https://github.com/rbhatt1999/stay-a-while-front-end',
    related: [
      { href: '/categories/ruby-on-rails', label: 'Notes on Ruby on Rails' },
      { href: '/work/sadhak-ai', label: 'Sadhak AI, a generative AI chat' },
    ],
    panel: {
      title: 'stay_a_while ~ api',
      stat: '● 200',
      lines: [
        { h: '<span class="sym">$</span> GET /api/v1/stays' },
        { h: '<span class="sym">▸</span> <span class="key">142</span> listings · <span class="dim">12 hosts</span>' },
        { h: '<span class="sym">▸</span> booking → <span class="ok">stripe ✓</span>' },
        { h: '<span class="sym">▸</span> client <span class="dim">react · redux store</span>' },
      ],
      tail: [
        { cls: 'resp', h: '<span class="sym">└</span> { "city": "manali", "nights": 3, "guests": 2, "total": "$420" }' },
        { h: '<span class="dim">payment</span> → <span class="ok">confirmed ✓</span><span class="cursor-blink"></span>' },
      ],
      foot: '<span class="ok">build ✓</span> · deployed on vercel',
    },
  },
]

export const MORE = [
  { name: 'space_hub', desc: 'spacex mission selector', github: 'https://github.com/rbhatt1999/Space-Hub' },
  { name: 'budget_app', desc: 'rails finance manager', github: 'https://github.com/rbhatt1999/budget-app' },
  { name: 'recipe_app', desc: 'cookbook + ingredients', github: 'https://github.com/rbhatt1999/recipe_app' },
  { name: 'finance_app', desc: 'stock market analysis', github: 'https://github.com/rbhatt1999/finance-app' },
  { name: 'math_magician', desc: 'calculator + practice', github: 'https://github.com/rbhatt1999/math-magician' },
]

export function getProject(slug) {
  return FEATURED.find((project) => project.slug === slug)
}
