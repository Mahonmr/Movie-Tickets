describe ('Ticket', function() {
  it ('creates a new ticket with the given properties', function() {
    var testMovie = new Ticket("Star Wars", 20, "true");
    expect(testMovie.movieTitle).to.equal("Star Wars");
    expect(testMovie.movieTime).to.equal(20);
    expect(testMovie.isASenior).to.equal("true");
  });

  it('generates a price when getPrice method is called', function() {
    var testMovie = new Ticket("Star Wars", 20, "true");
    expect(testMovie.getPrice()).to.equal(11);

  });
});
