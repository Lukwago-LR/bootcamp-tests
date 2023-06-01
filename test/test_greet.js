describe('Test greet', function () {
  it('Should show name!', function () {
    // after you declared the function
    assert.equal(greet('Bob'), 'Hi, Bob!');
    //this assert should fail
    assert.equal(greet('Sibo'), 'Hi, Sibo!');
  });
});