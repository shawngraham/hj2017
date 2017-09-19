console.log("app2");

$(document).ready(function() {

    function generate() {
        $("#output2").html("");

        var grammarTracery = tracery.createGrammar(grammar);
        //$("#grammar").html(grammar.toText());

            var s = grammarTracery.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output2").append(div);

    }

    setTimeout(function() {
        generate();

    }, 10);

});
