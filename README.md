# Setup with Lerna and Storybook

This is a repo I use to test how to easily integrate

&nbsp;

## Installing & Running

### Prerequisites:

- Node v16 or later (check version using `node -v`)
- Lerna (with `npm install --global lerna`)

&nbsp;

### Installation:

1. Initialise Lerna `npx lerna init`
2. Install nested dependencies and link apps and packages together using `npx lerna bootstrap`

&nbsp;

### Running:

You can start the frontend using `npx lerna run dev --parallel`
Link: http://localhost:3000/

You can access Storybook with `cd packages/components && yarn run storybook`
Link: http://localhost:6006

&nbsp;

### Credits:

- I used this sources for building this repo:
  https://buttercms.com/blog/nextjs-storybook-and-lerna-build-a-monorepo-structure
- And as always lot's of https://stackoverflow.com/
