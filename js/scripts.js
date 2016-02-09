function Ticket(movieTitle, movieTime, isASenior, numberOfTickets) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.isASenior = isASenior;
  this.numberOfTickets = numberOfTickets;
}

Ticket.prototype.getPrice = function() {
  var price = 15;
  if (this.isASenior === "true") {
    console.log("senior");
    price -= 4;
  }
  if (this.movieTime <= 16) {
    price -=4;
  }

  console.log(this.numberOfTickets);
  price *= parseInt(this.numberOfTickets);
  return price;
}

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    var inputtedNumberOfTickets = $("#number-of-tickets").val();
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("#movie-time").val();
    var inputtedIsASenior = $("#is-a-senior").val();
    var newTicket = new Ticket(inputtedMovieTitle, inputtedMovieTime, inputtedIsASenior, inputtedNumberOfTickets);


  $("#show-purchase span").text(newTicket.getPrice());


  });
});
