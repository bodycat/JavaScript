var table = document.createElement("table");

for (var i = 1; i < 11; i++) {

    var tr = document.createElement("tr");

    for (var j = 1; j < 11; j++){
        var td = document.createElement("td");
        if (i==1 || j==1) {
            td.className = "transparent"
        }
        else if (i==10 || j==10) {
            td.className = "transparent"
        }        
        else if (i%2 == j%2) {
            td.className = "whitesmoke";            
        } else {
            td.className = "peru";
          }
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

document.body.appendChild(table);

// var table = document.createElement("table");
// for (var i = 1; i < 9; i++) {
//     var tr = document.createElement('tr');
//     for (var j = 1; j < 9; j++) {
//         var td = document.createElement('td');
//         if (i%2 == j%2) {
//             td.className = "white";
//         } else {
//             td.className = "gray";
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);