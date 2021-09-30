export { };
const { I } = inject();

Feature('POST test');

Scenario('Verify creating a new transaction', async ({ I }) => {
    const transaction = {
        "description": "invoice transaction at Yundt - Hegmann using card ending with ***0221 for NAD 985.32 in account ***04689975",
        "amount": "758.67",
        "type": "type 2"
    }
    const resp = await I.sendPostRequest('/', transaction);
    await I.assertEqual(resp.status, 201);
    await I.assertEqual(resp.data.type, transaction.type)
    await I.assertEqual(resp.data.amount, transaction.amount)
    await I.assertEqual(resp.data.description, transaction.description)
    await I.assertEqual(resp.data.id, resp.data.id)

})