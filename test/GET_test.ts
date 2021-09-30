export { };
const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call to list all transactions', async () => {
    const resp = await I.sendGetRequest('/');
    await I.assertEqual(resp.status, 200);
});

Scenario('Verify a successful call to get a particular transaction', async () => {
    let id = 30;
    const resp = await I.sendGetRequest(`/${id}`);
    await I.assertEqual(resp.data.id, `${id}`);
    await I.assertEqual(resp.status, 200);
    await I.assertEqual(resp.data.type, resp.data.type)
    await I.assertEqual(resp.data.amount, resp.data.amount)
    await I.assertEqual(resp.data.description, resp.data.description)
    await I.assertEqual(resp.data.id, resp.data.id)
});

Scenario('Verify a call to a transaction that does not exist', async () => {
    let id = 90000
    const resp = await I.sendGetRequest(`/${id}`);
    await I.assertEqual(resp.status, 404);
});
