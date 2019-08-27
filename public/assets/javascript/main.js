$(function () {
    $(".changeDevoured").on("click", function (event) {
      var id = $(this).data("id");
      var devouredstate = $(this).data("devouredstate");
      var newDevouredState = {
        devoured: devouredstate
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          location.reload();
        }
      );
    });

    $("#makeBurger").on("click", function (event) {
      event.preventDefault();
      var newBurger = {
        name: $("#newBurgerName").val().trim(),
        devoured: false
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created New Burger");
          location.reload();
        }
      )
    })
  });