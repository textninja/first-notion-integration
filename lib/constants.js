export const INTEGRATION_PAGE_ID = (() => {
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