function Ticket(movieTitle, movieTime, isASenior, numberOfTickets) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.isASenior = isASenior;
  this.numberOfTickets = numberOfTickets;
}

Ticket.prototype.getPrice = function() {
  var price = 15;
  if (this.isASenior === "true") {
    price -= 4;
  }
  if (this.movieTime <= 16) {
    price -=4;
  }

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

  
  $("#show-purchase").append("<div class='new-purchase'> " +
                                "<h2>" + newTicket.movieTitle + "</h2>" +
                                "<p> Time: " + newTicket.movieTime + ":00</p>" +
                                "<p>Tickets: " + newTicket.numberOfTickets + "</p>" +
                                "<p>Total: $" + newTicket.getPrice() + "</p>" +
                             "</div>");
  });

});
