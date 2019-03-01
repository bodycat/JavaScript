var $board = document.getElementById('board');
var $table = document.createElement('table');
figure = [ '','A','B','C','D','E','F','G','H','' ];

for(var i=9; i>=0; i--) {
	var $row = document.createElement('tr');
	for(var j = 0; j <= 9; j++) {
		var $cell = document.createElement('td');
		// вывод по горизонтали
		if (i==9 || j==0) {$cell.textContent = figure[j];}
		if (i==0 || j==0) {$cell.textContent = figure[j];}
		// if (i==0  || j==10) {$cell.textContent = figure[j];}		
		// вывод по вертикали
		if (i==0 || j==0) {$cell.textContent = i;}
		if (i==0 || j==9) {$cell.textContent = i;}
	    // пустоты по вертикали
		if (i==9 && j==0) {$cell.textContent = ' ';}
		if (i==0 && j==0) {$cell.textContent = ' ';}

		if (i==9 && j==9) {$cell.textContent = ' ';}
		if (i==0 && j==9) {$cell.textContent = ' ';}
		$row.appendChild($cell);
	}
	$table.appendChild($row);
}
$board.appendChild($table);