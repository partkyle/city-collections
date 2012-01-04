describe('BinHeap', function() {
  it('should have a default comparator', function() {
    var heap = new BinHeap();

    heap.push(1);
    heap.size().should.equal(1);

    heap.push(2);
    heap.size().should.equal(2);
  });

  it('should pop elements in the proper order', function() {
    var heap = new BinHeap();

    heap.push(2);
    heap.push(1);
    heap.push(15);

    heap.pop().should.equal(1);
    heap.pop().should.equal(2);
    heap.pop().should.equal(15);
    heap.size().should.equal(0);
  });
})
