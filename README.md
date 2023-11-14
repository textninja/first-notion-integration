# My First Notion Integration

This is a throwaway test to see what I can do with Notion's [integration API](https://www.notion.so/integrations/all). You'll need to set up an integration on the [My Integrations page](https://www.notion.so/my-integration) and configure permissions accordingly.

## What's in the box

I'm working through a series of progressive challenges:

- [x] Retrieve page title
- [ ] Retrieve page content
- [ ] Add CI to update a README file using a particular page's content

## Set up

This app expects to find your Notion Integration API key in the environment variable `NOTION_INTEGRATION_SECRET`.

```bash
export NOTION_INTEGRATION_SECRET=your_secret
```

Install dependencies with yarn.

```bash
yarn
```

Run all the trial integrations.

```bash
node index.js NOTION_PAGE_ID
```

You can also define an optiional environment variable to run the script without args.

```bash
export NOTION_INTEGRATION_PAGE_ID=someid
node index.js
```

## Future development

I'm just beginning with the notion integrations API, but can imagine building integrations to:

- Automatically update designated content based on external events
- Back up a workspace or page
- Run some content through a langchain
- Update a README or project docs
- Pull data from a Notion database into a CMS
- Use notion as a store for content scheduled for posting on social media