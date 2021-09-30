export { };
const { I } = inject();

Feature('DELETE test');

Scenario('Verify deleting a transaction', async () => {
    let id = Math.floor((Math.random() * 90) + 1);

	const resp = await I.sendDeleteRequest(`/${id}`);
    await I.assertEqual(resp.status, 200);
});