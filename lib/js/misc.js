function doAlot (){

    document.write("Låt oss börja med att loopa igenom en array!<br>");

    var array = [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

    array.forEach(function(element) {
        document.write("Det absoluta värdet på elementet är:", Math.abs(element), "<br>");
        document.write("På den här raden undersöker vi vilken datatyp som elementet har: ", typeof(element), "<br><br>" );
        document.write("Här konverterar vi elementet till en sträng från att ha varit ett Number<br>");
        document.write("På den här raden undersöker vi vilken datatyp som elementet har igen!: ", typeof(element.toString()), "<br><br>" );
    });

    var sant = true;
    var falskt = false;

    if(sant) {
        document.write("<br><br><br> Detta skrivs ut om variabeln sant == true (som är en boolean)")
    }

    if(falskt) {
        document.write("Den här raden kommer aldrig skrivas ut.")
    }
    
    var textmassa = document.getElementById("brodtext").outerHTML;
    var regex = /aliquam/i
    document.write("<br>På denna position i brödtexten på sidan så hittar vi ordet aliquam: ", textmassa.search(regex));

    var kodegentligen = "document.write('<br><br>Dagens datum och tid är: ', Date());"
    eval(kodegentligen);

}

doAlot();
