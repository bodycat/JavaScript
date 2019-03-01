var $board = document.getElementById('board');
var $table = document.createElement('table');
figure = [ '','A','B','C','D','E','F','G','H','' ];

for(var i = 9; i >= 0; i--) {
	var $row = document.createElement('tr');
	for(var j = 0; j <= 9; j++) {
		var $cell = document.createElement('td');
        if (i==9 || j==9) {
            $cell.className = "transparent"
        }
        else if (i==0 || j==9) {
            $cell.className = "transparent"
        }
        else if (i==0 || j==0) {
            $cell.className = "transparent"
        }        
        else if (i%2 == j%2) {
            $cell.className = "peru";
        } else {
        	$cell.className = "whitesmoke";
          }
  

		// вывод по горизонтали
		if (i==9 || j==0) {$cell.textContent = figure[j];}
		if (i==0 || j==0) {$cell.textContent = figure[j];}
		// if (i==0 || j==10) {$cell.textContent = figure[j];}
		// вывод по вертикали
		// вывод справа
		if (i==1 || j==0) {if (j==0){$cell.textContent = i;}}
		// вывод слева
		if (i==1 || j==9) {if (j==9){$cell.textContent = i;}}
	    // пустоты в углах
		if (i==9 && j==0) {$cell.textContent = ' ';}
		if (i==0 && j==0) {$cell.textContent = ' ';}
		// пустоты в углах
		if (i==9 && j==9) {$cell.textContent = ' ';}
		if (i==0 && j==9) {$cell.textContent = ' ';}
		// осталось прорисовать фигуры и CSS
		$row.appendChild($cell);
	}
	$table.appendChild($row);
}
$board.appendChild($table);