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
            var byline = grammarTracery.flatten("#bylines#");
            var t6 = grammarTracery.flatten("#origin#");
            var byline2 = grammarTracery.flatten("#bylines#");
            var byline3 = grammarTracery.flatten("#bylines#");
            var byline4 = grammarTracery.flatten("#bylines#");

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

            var div12 = $("<div/>", {
                class : "outputSample",
                html : byline
            });

            var div13 = $("<div/>", {
                class : "outputSample",
                html : t6
            });

            var div14 = $("<div/>", {
                class : "outputSample",
                html : byline2
            });

            var div15 = $("<div/>", {
                class : "outputSample",
                html : byline3
            });

            var div16 = $("<div/>", {
                class : "outputSample",
                html : byline4
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
            $("#byline").append(div12);
            $("#output6").append(div13);
            $("#byline2").append(div14);
            $("#byline3").append(div15);
            $("#byline4").append(div15);


    }

    setTimeout(function() {
        generate();

    }, 10);

});
