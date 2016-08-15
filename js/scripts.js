$(document).ready(function() {
  $("#groceries").submit(function(event) {

    var items = [$("#item1").val() , $("#item2").val() , $("#item3").val() , $("#item4").val() , $("#item5").val() ];

    var alphabets = items.map(function(item) {
      return item.toUpperCase();
    });

    alphabets.sort();

    alphabets.forEach(function(alphabet){
      $("#output").append("<li>" + alphabet + "</li>");
    });

    event.preventDefault();
    $("#groceries").fadeOut();

  });
});
