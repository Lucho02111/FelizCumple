$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var music = document.getElementById("birthdaySong");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("Señoraaaaa, feli cumple enane, ya pasas a la ruta de los 26 ya tas viejaaxd, mas bien guarda torta :v xd").delay(750).fadeIn(300);
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );

                // Reproducir música
                music.play();
            }
        });
    });
});
