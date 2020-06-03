const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');

setDefaultTimeout(60000);

BeforeAll(async () => {
    await startWebDriver();
    await createSession();
});

After(() => client.execute(`
    localStorage.clear();
    sessionStorage.clear();`)
);

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
});