SjekkTall = () => {
    var T1 = document.getElementById("T1").value;
    var sum = 0;
    var i = 0;

    while (i < T1) {
        if (T1 % i == 0) {
            sum = sum + i;
        }
        i++;
    }
    
    if (T1 == sum) {
        document.getElementById("Svar").innerHTML = ("Tallet er et perfekt tall")
    } else {
        document.getElementById("Svar").innerHTML = ("Tallet er ikke et perfekt tall")
    }
}

TilfTall = () => {
    var T2 = Math.floor(Math.random() * 497);
    document.getElementById("T1").value = (T2)
    var sum = 0;
    var i = 0;

    while (i < T2) {
        if (T2 % i == 0) {
            sum = sum + i;
        }
        i++;
    }
    
    if (T2 == sum) {
        document.getElementById("Svar").innerHTML = ("Tallet er et perfekt tall")
    } else {
        document.getElementById("Svar").innerHTML = ("Tallet er ikke et perfekt tall")
    }
}

//Input Color
Palette = () => {document.body.style.backgroundColor = document.getElementById("Palette").value}

//Input Range
var rødSkyveknapp = document.getElementById("Rød");
var grønnSkyveknapp = document.getElementById("Grønn");
var blåSkyveknapp = document.getElementById("Blå");

RGB = () => {
    Rød = rødSkyveknapp.value;
    Grønn = grønnSkyveknapp.value;
    Blå = blåSkyveknapp.value;
    var rgbFarge = `rgb(${Rød}, ${Grønn}, ${Blå})`;
    document.body.style.backgroundColor = rgbFarge;
}

//Input Tekst
SettFarge = () => {document.body.style.backgroundColor = document.getElementById("FargeTekst").value;}

//Tilfeldig Farge
TilfFarge = () => {
    var bokstaver = "0123456789ABCDEF";
    var Farge = "#";
    for (var i = 0; i < 6; i++) {
        Farge += bokstaver[Math.floor(Math.random() * 17)];
    }

    document.body.style.backgroundColor = Farge;
}