import 'dotenv/config';
import Notion from '@notionhq/client';
import { INTEGRATION_PAGE_ID } from './lib/constants.js';

const { Client: NotionClient } = Notion;

const notion = new NotionClient({
    auth: process.env.NOTION_INTEGRATION_SECRET
});

const page = await notion.pages.retrieve({
    page_id: INTEGRATION_PAGE_ID
});

console.log('The page title is ' + page.properties.title.title[0].text.content);
