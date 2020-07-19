$(() => {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        )
    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log(id);
        console.log(newDevoured);

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log("changed devoured to", newDevoured);
            location.reload();
        }
        );
    });
});