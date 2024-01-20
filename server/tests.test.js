const service = require('./service.js');
test('creates blessing succesfully', async() => {
    blessings =await service.getBlessings({nameReciver:"Rivky",nameGiver:"Malky",amount:"2",gender:"male", event: 'birthday', age: 20, atmosphere: "funny", length: "short" });
    console.log(blessings);
    expect(blessings.length).toBe(3);
    expect.status(200)
});
test('returns error if missing detailes',async () => {
    blessings = await service.getBlessings({});
    expect(blessings).toBe("חסרים פרטים");
});
