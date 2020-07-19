$(() => {
    $("create-form").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("Created new burger");
                location.reload();
            }
        )
    });
});