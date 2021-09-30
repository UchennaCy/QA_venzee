export { };
const { I } = inject();

Feature('PUT  test');

Scenario('Verify an update to a transaction', async ({ I }) => {
    const transaction = {
        "description": "invoice yola at macaroni - Hegmann using card ending with ***0221 for NAD 985.32 in account ***04689975",
        "amount": "758.67",
        "type": "type 2"
    }
    {
        let id = 67;
        const resp = await I.sendPutRequest(`/${id}`, transaction);
        await I.assertEqual(resp.status, 200);
        await I.assertEqual(resp.data.type, transaction.type)
        await I.assertEqual(resp.data.amount, transaction.amount)
        await I.assertEqual(resp.data.description, transaction.description)
        await I.assertEqual(resp.data.id, `${id}`)
    }
})