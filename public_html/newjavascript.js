$(document).ready(function () {
        var termekekTomb = [

        ];

        $("#gomb").click(function () {
            var ujTermek = {
                tNev: $("#temekNev").val(),
                tAzon: $("#termekAzon").val(),
                tAr: $("#termekAr").val(),
                tKeszlet: $("#termekKeszlet").val(),
                tKategria: $("#termekKategoria").val()
            };
            var tableForma="<tr>";
            for (var item in ujTermek) {
                if(ujTermek[item].length>10){
                    
                }
                tableForma+="<th>"+ujTermek[item]+"</th>";
            }
            tableForma+="</tr>";
            $('table').append(tableForma);
        });
    });



