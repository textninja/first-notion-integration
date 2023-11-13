# My First Notion Integration

This is just a throwaway test to see what I can do with Notion's [integration API](https://www.notion.so/integrations/all).

## What's in the box

We're going to start with an integration that reads some content.

## Set up

This app expects to find your Notion Integration API key in the environment variable `NOTION_INTEGRATION_SECRET`.

```bash
export NOTION_INTEGRATION_SECRET=your_secret
```

Install dependencies with yarn.

```bash
yarn
```

Run.

```bash
yarn run
```

## Some ideas

I might build integrations to:

- Automatically update designated content based on external events
- Back up my workspace