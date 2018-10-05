const functions = require('./functions');


// add function to equal
test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2,2)).toBe(4);
})


// adding function to not equal
test('Adds 2 + 2 to not equal 5', () => {
	expect(functions.add(2,2)).not.toBe(5);
})


// function to return null
test('Should be null', () => {
	expect(functions.isNull()).toBe(null);
})


// function to return falsy
test('Should be falsy', () => {
	expect(functions.checkValue(undefined)).toBeFalsy();
})


// function to return an object. since object and array is passed by reference we will need to use toEqual
test('See Ace Chua', () => {
	expect(functions.newPerson()).toEqual({
		firstName : 'Ace',
		lastName : 'Chua'
	});
})


// less than or equal to a value
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
})


// match regex expression
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
})


// if array contains element
test('Admin should be in the team', () => {
	expect(['Ace', 'Ben', 'Admin']).toContain('Admin');
})


// working with async data
test('user fetch name should be Leanne Graham', () => {
	expect.assertions(1);
	return functions.fetchUser().then(data => {
		expect(data.name).toBe('Leanne Graham');
	});
})

// working with async data
test('user fetch name should be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.username).toBe('Bret');
})