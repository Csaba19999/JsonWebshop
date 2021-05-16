$(document).ready(function () {
    var termekekTomb = [];
    let torlesID = 0;
    $("#gomb").click(function () {
        const leiras = {
            HáztartásiKisgép: "A mai világunkban az otthonunk elképzelhetetlen háztartási eszközök nélkül.",
            AutóMotorAlkatrész: "Minden alkatrész fontos eleme egy egésznek",
            Szépségápolás: "Elsősorban a nők részeként használatos szó összetétel és a legpontosabb értelmében a szó önmagát jelenti az az a szépségünk folyamatos ápolását",
            SzórakoztatóElektronika: "A legjobban fejlődő iparág a 21.században"
        };
        torlesID++;
        var ujTermek = {
            tNev: $('#temekNev').val(),
            tAzon: $('#termekAzon').val(),
            tAr: $('#termekAr').val(),
            tKeszlet: $('#termekKeszlet').val(),
            tKategria: $('#termekKategoria').val(),
            tLeiras: $('Ez itt egy leírás'),
            tTorles: $('<input id="torles' + torlesID + '" type="submit" value="törlés">')
        };

        //Eldontes
        if (ujTermek.tKategria == "haztartasi") {
            ujTermek.tLeiras = leiras.HáztartásiKisgép;
        } else if (ujTermek.tKategria == "auto") {
            ujTermek.tLeiras = leiras.AutóMotorAlkatrész;
        } else if (ujTermek.tKategria == "szépségápolás") {
            ujTermek.tLeiras = leiras.Szépségápolás;
        } else if (ujTermek.tKategria == "Szórakoztató elektronika") {
            ujTermek.tLeiras = leiras.SzórakoztatóElektronika;
        } else {
            ujTermek.tLeiras = "Nem létező leírás";
        }


        var tableForma = "<tr>";
        for (var item in ujTermek) {
            tableForma += "<th>" + ujTermek[item] + "</th>";
        }
        tableForma += "</tr>";
        $('table').append(tableForma);
        termekekTomb += ujTermek;


    });
    $("#torles1").click(function () {
        var myobj = document.getElementById("demo");
        myobj.remove();
    });


});



