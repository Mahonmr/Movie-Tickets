describe ('Ticket', function() {
  it ('creates a new ticket with the given properties', function() {
    var testMovie = new Ticket("Star Wars", 20, "true", 4);
    expect(testMovie.movieTitle).to.equal("Star Wars");
    expect(testMovie.movieTime).to.equal(20);
    expect(testMovie.isASenior).to.equal("true");
    expect(testMovie.numberOfTickets).to.equal(4);
  });

  it('generates a price when getPrice method is called', function() {
    var testMovie = new Ticket("Star Wars", 20, "true", 4);
    expect(testMovie.getPrice()).to.equal(44);

  });
});
