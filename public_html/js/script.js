"use strict";
//alert("hello fulda!");
//1.1
document.write("Hello World");

//1.2
var i, j;
i = 17;
j = 4;
var erg = addieren(i, j);
var kk = i;
i = j
j = kk;
var erg = addieren(i, j);
document.write("Ergebnis: " + erg);

//2.2
function addieren(a, b)
{
    return a + b;
}

//1.3/4
document.write("<br />");
for (var i = 0; i < 10; i++) {
    document.write("<br />" + i + "= ");
    if (i % 2 === 0) {
        document.write("even");
    }
    else {
        document.write("odd");
    }
}
document.write("<br />");
var j = 0;
while (j <= 9) {
    document.write(j);
    j++;
}

var k = 0;
do {
    document.write(k);
    k++;
} while (k <= 9)
//1.5
var datum = new Date();
var wochentag = datum.getDay();
var day;
switch (wochentag) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
document.write(day);
//1.6
var input = prompt("Gib mir deinen Namen!");
alert("Alert: " + input);
confirm("Confirm: " + input);
//2.1
function hello()
{
    document.write("Hallo Fulda!");
}
//2.3
var str1 = "foo";
var str2 = "BAR";
var konk = addieren(str1, str2);
document.write(konk);

//2.4
function fakultaetRekursiv(n)
{
    if (n > 1) {
        return n * fakultaetRekursiv(n - 1);
    }
    else {
        return 1;
    }
}
document.write("<br>Rekursiv:" + fakultaetRekursiv(5));

function fakultaetIterativ(n) {
    var fakultaet = 1;
    var counter = 1;
    while (counter <= n) {
        fakultaet = fakultaet * counter;
        counter++;
    }
return fakultaet;
}
document.write("<br>Iterativ:" + fakultaetIterativ(5));

//2.5
//function pattern(numLines) {
//    for (j = 0; j <= numLines; j++) {
//        document.write(" <p style='font-family=monospace;' width=100% align=right>");
//        for (i = 0; i < j * 2 - 1; i++) {
//            document.write("+");
//        }
//        document.write(" </p>");
//    }
//}
//pattern(10);

//var num=prompt("Wie viele Musterzeilen?:");
//pattern(num);
//
//function pattern(numLines) {
//    for (var j=0; j<=numLines;j++) {
//       document.write("<p style='font-family=monospace;' width=100%");
//        for (var k=numLines; k<j;k--) {
//            document.write("0");
//            for (var i = 0; i < j * 2 - 1; i++) {
//               document.write("+"); 
//            }
//       }
//       document.write("</p>");
//    }
//}

//document.write("<p id=\"zeigsMir\">");
//function pattern(numLines){
//	var i,j;
//	var arr = new Array(numLines);
//	for (i=1; i< numLines; i++){
//		var n = (numLines-1)*2;
//		for(j=0; j<n; j++)
//			arr[i-1][j] = 0;
//		for(j=0; j<2*i-1; j++)
//			arr[i-1][j+n]=1;
//					
//	}
//	return arr;
//}
//
//function showPattern(arr){
//	var str = "";
//	for (var i=0; i<arr.length; i++) {	
//		for (var j = 0; j<arr[i].length; j++){
//		str += arr[i][j] ? 'x' : '-';
//		}
//		str += '<br>';
//	}document.getElementById('zeigsMir').innerHTML =str;	//als id in nem pre
//}
//showPattern(pattern(num));

function pattern(numLines) {
    document.write("<pre>");

    var plus,
            space;
    for (var i = 0; i <= numLines; i++) {

        space = 2 * numLines - plus - 1;
        for (var k = 0; k < space; k++) {
            document.write(" ");
        }

        plus = 2 * i - 1;
        for (var j = 0; j < plus; j++) {
            document.write("+");
        }
        document.write("<br>");
    }
    document.write("</pre>");
}


var num =+ prompt ("Number of Lines: ", "");

pattern(num);

document.write("</p>");

//2.6
var n;
function unendlich() {
    //var args =  fisch;
    for (var i = 0; i < arguments.length; i++) {
        document.write(arguments[i] + "<br>");
    }
}
unendlich(n, " Pfannkuchen ", 47);