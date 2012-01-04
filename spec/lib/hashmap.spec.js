describe('Hash', function() {
  var hash;
  beforeEach(function() {
    hash = new Hash();
  });

  it('should return undefined on a missing key', function() {
    expect(hash.get(0)).should.be.undefined;
  });

  it('should return the value for a given key', function() {
    hash.put('moo', 5);
    hash.get('moo').should.equal(5);
  });

  it('should return true if it contains the object', function() {
    hash.put('face', 'your');
    hash.contains('face').should.be.true;
  });

  it('should not contain the key after remove', function() {
    hash.put('cow', 'link');
    hash.remove('cow');
    hash.contains('cow').should.be.false;
  });

  it('should have an entry set that reflects the k,v pairs', function() {
    hash.put('lttp', 'awesome');
    hash.put('mm', 'good');
    hash.put('chicken', 'op');

    hash.entrySet().should.eql([
      {key: 'lttp', value: 'awesome'},
      {key: 'mm', value: 'good'},
      {key: 'chicken', value: 'op'}
    ]);
  });
});
