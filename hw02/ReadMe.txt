https://codepen.io/khizri-tataev/pen/MLLjeP	
https://codepen.io/khizri-tataev/pen/rPPbMQ
остальные потом, не успел внести в codepen.io до 15:00

Оформление JS Style
https://learn.javascript.ru/coding-style
https://www.youtube.com/watch?v=tJ7JcweIOZ4

Строки
https://learn.javascript.ru/string
https://asciitable.com

Рекурсии
Уроборос
https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%81
Сепульки
https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BF%D1%83%D0%BB%D1%8C%D0%BA%D0%B8

https://github.com/getify/You-Dont-Know-JS

В JavaScript нет разницы между двойными и одинарными кавычками.
Специальные символы

Строки могут содержать специальные символы. Самый часто используемый из таких символов – это «перевод строки».
Он обозначается как \n, например:

alert( 'Привет\nМир' ); // выведет "Мир" на новой строке

Есть и более редкие символы, вот их список:
Специальные символы Символ	Описание
\b	Backspace
\f	Form feed
\n	New line
\r	Carriage return
\t	Tab
\uNNNN	Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©
Экранирование специальных символов

Если строка в одинарных кавычках, то внутренние одинарные кавычки внутри должны быть экранированы, то есть снабжены обратным слешем \', вот так:            
var str = 'I\'m a JavaScript programmer';

В двойных кавычках – экранируются внутренние двойные:
var str = "I'm a JavaScript \"programmer\" ";
alert( str ); // I'm a JavaScript "programmer"

Экранирование служит исключительно для правильного восприятия строки JavaScript. В памяти строка будет содержать сам символ без '\'. Вы можете увидеть это, запустив пример выше.
Сам символ обратного слэша '\' является служебным, поэтому всегда экранируется, т.е пишется как \\:

var str = ' символ \\ ';
alert( str ); // символ \

Заэкранировать можно любой символ. Если он не специальный, то ничего не произойдёт:

alert( "\a" ); // a
// идентично alert(  "a"  );
