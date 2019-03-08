var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var $mainWrapper = document.createElement('div');
$mainWrapper.classList.add('wrap');
document.body.appendChild($mainWrapper);

var $verticalLeft = document.createElement('ul');
$verticalLeft.classList.add('vertical-left', 'border');

var $verticalRight = document.createElement('ul');
$verticalRight.classList.add('vertical-right', 'border');

var $horisontalTop = document.createElement('ul');
$horisontalTop.classList.add('horisontal-top', 'border');


var $horisontalBottom = document.createElement('ul');
$horisontalBottom.classList.add('horisontal-bottom', 'border');


function generateTags(ul, flag) {
    for (var i = 0; i < letters.length; i++) {
        var $childBorder = document.createElement('li');
        if (flag !== true) {
            $childBorder.textContent = i + 1;

        } else {
            $childBorder.textContent = letters[i];
        }
        ul.appendChild($childBorder)
    }
    return ul

}

$mainWrapper.appendChild(generateTags($horisontalTop, true));
$mainWrapper.appendChild(generateTags($verticalLeft));
$mainWrapper.appendChild(generateTags($horisontalBottom, true));
$mainWrapper.appendChild(generateTags($verticalRight));

var $chessWrap = document.createElement('div');
$chessWrap.id = 'chessBoard';
$chessWrap.classList.add('chess-wrap');
$mainWrapper.appendChild($chessWrap);

var figsWhite = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
var peshWhite = '♙';
var figsBlack = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
var peshBlack = '♟';
var generateBoard = function (board) {
    for (var i = 0; i < 8; i++) {
        var $row = document.createElement('div');
        $row.classList.add('row');
        board.appendChild($row);
        for (var j = 0; j < 8; j++) {
            var box = document.createElement('div');
            box.classList.add('box');
            $row.appendChild(box);
            switch (i) {
                case 0:
                    box.textContent = (figsBlack[j]);
                    break;
                case 1:
                    box.textContent = (peshBlack);
                    break;
                case 6:
                    box.textContent = (peshWhite);
                    break;
                case 7:
                    box.textContent = (figsWhite[j]);
                    break;
            }
        }
    }
    return board
};
$mainWrapper.appendChild(generateBoard($chessWrap));