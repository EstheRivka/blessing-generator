// import { getBlessings } from "./service";
const service = require('./service.js');
test('creates blessing succesfully', async() => {
    blessings =await service.getBlessings({ event: 'birthday', age: 20, mood: "funny", length: "short" });
    expect(blessings.length).toBe(3);
    expect.status(200)
});
test('returns error if missing detailes',async () => {
    blessings = await service.getBlessings({});
    expect(blessings).toBe("חסרים פרטים");
});
test('returns error if exceeds rate limit',async () => {
    // Arrange.
    // Simulate rate limit response (HTTP 429).
    // mock.onGet(`localhost:3000?event=birthday&age=20&mood=funny&length=short`).reply(429, { "message": "Rate limit exceeded" });

    // Act.

    try {
        const blessings = await service.getBlessings({ event: 'birthday', age: 20, mood: "funny", length: "short" });
        // If the function doesn't throw an error for rate limiting, fail the test.
        // expect.fail('Expected function to throw an error for rate limiting');
        console.log(blessings,"what happened");
    } catch (error) {
        // Assert.
        expect(error.response.status).to.equal(429, 'Should receive a rate limit exceeded response');
        expect(error.response.data.message).to.equal('Rate limit exceeded. Please check your usage.', 'Error message should match');
    }
});

