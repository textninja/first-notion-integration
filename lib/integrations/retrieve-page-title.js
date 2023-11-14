import Notion from '@notionhq/client';

export default async function retrievePageTitle(integrationSecret, pageId) {
    const { Client: NotionClient } = Notion;
    
    const notion = new NotionClient({
        auth: integrationSecret
    });
    
    const page = await notion.pages.retrieve({
        page_id: pageId
    });
    
    console.log('The page title is ' + page.properties.title.title[0].text.content);    
}
