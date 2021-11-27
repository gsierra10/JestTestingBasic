const functions = require('./functions')

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//toBe
test('Adds 2 + 2 to equal 4', () =>{
    expect(functions.add(2, 2)).toBe(4);    
});

//.not.toBe
test('Adds 2 + 2 to NOT equal 5', () =>{
    expect(functions.add(2, 2)).not.toBe(5);    
});

//toBeNull
test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();    
});

//toBeFalsy
test('Should be falsy', () =>{
    expect(functions.checkValue(0)).toBeFalsy();    
});

//toEqual|toStrictEqual & testing Object
test('User should be Gustavo Sierra object', () =>{
    expect(functions.createUser(0)).toStrictEqual({ 
        firstName:'Gustavo',
        lastName:'Sierra'
    });    
});

//toBeLessThan & toBeGreaterThan & toBeLessThanOrEqual
test('Should be under 1600', ()=> {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex || toMatch
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

//Arrays || toContain
test('Admin should be in usernames', () => {
    usernames = ['gustavo', 'gonzalo', 'admin'];
    expect(usernames).toContain('admin')
});

// Working with async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Working with async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');  
});
