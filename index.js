import 'dotenv/config';
import Notion from '@notionhq/client';

const INTEGRATION_PAGE_ID = (() => {
    if (process.argv.length === 3) {
        return process.argv[2];
    }

    if (process.env.NOTION_INTEGRATION_PAGE_ID) {
        return process.env.NOTION_INTEGRATION_PAGE_ID;
    }

    console.error(
        'usage: node index.js PAGE_ID'
    );
    process.exit(1);
})();

const { Client: NotionClient } = Notion;

const notion = new NotionClient({
    auth: process.env.NOTION_INTEGRATION_SECRET
});

const page = await notion.pages.retrieve({
    page_id: INTEGRATION_PAGE_ID
});

console.log('The page title is ' + page.properties.title.title[0].text.content);
