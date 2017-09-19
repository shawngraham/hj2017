console.log("app");

$(document).ready(function() {

    function generate() {
        $("#output").html("");

        var grammarTracery = tracery.createGrammar(grammar);
        //$("#grammar").html(grammar.toText());

            var s = grammarTracery.flatten("#insertpictures#");
            var t = grammarTracery.flatten("#origin#");
            var shout = grammarTracery.flatten("#headline#");
            var shout2 = grammarTracery.flatten("#headline#");
            var shout3 = grammarTracery.flatten("#headline#");
            var shout4 = grammarTracery.flatten("#headline#");
            var shout5 = grammarTracery.flatten("#headline#");
            var t2 = grammarTracery.flatten("#origin#");
            var t3 = grammarTracery.flatten("#origin#");
            var t4 = grammarTracery.flatten("#origin#");
            var t5 = grammarTracery.flatten("#origin#");

            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            var div2 = $("<div/>", {
                class : "outputSample",
                html : t
            });

            var div3 = $("<div/>", {
                class : "outputSample",
                html : shout
            });

            var div4 = $("<div/>", {
                class : "outputSample",
                html : shout2
            });

            var div5 = $("<div/>", {
                class : "outputSample",
                html : shout3
            });

            var div6 = $("<div/>", {
                class : "outputSample",
                html : shout4
            });

            var div7 = $("<div/>", {
                class : "outputSample",
                html : shout5
            });

            var div8 = $("<div/>", {
                class : "outputSample",
                html : t2
            });

            var div9 = $("<div/>", {
                class : "outputSample",
                html : t3
            });

            var div10 = $("<div/>", {
                class : "outputSample",
                html : t4
            });

            var div11 = $("<div/>", {
                class : "outputSample",
                html : t5
            });

            $("#newsphotos").append(div);
            $("#output").append(div2);
            $("#shout").append(div3);
            $("#shout2").append(div4);
            $("#shout3").append(div5);
            $("#shout4").append(div6);
            $("#shout5").append(div7);
            $("#output2").append(div8);
            $("#output3").append(div9);
            $("#output4").append(div10);
            $("#output5").append(div11);


    }

    setTimeout(function() {
        generate();

    }, 10);

});
