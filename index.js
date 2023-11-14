import 'dotenv/config';
import { INTEGRATION_PAGE_ID } from './lib/constants.js';

const integrations = [
    'retrieve-page-title'
];

for (let integration of integrations) {
    console.log(`Running integrations/${integration}.js`);

    const run = (await import(`./lib/integrations/${integration}.js`)).default;
    await run(
        process.env.NOTION_INTEGRATION_SECRET,
        INTEGRATION_PAGE_ID
    );
}
