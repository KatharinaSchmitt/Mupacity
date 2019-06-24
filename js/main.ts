namespace mupacity {
    window.addEventListener("load", init);
    let startseite = document.createElement("div");
    function init(_event: Event): void {
        let inhalt: string = `
        
        <h1>Mupacity</h1>
        <h2>Where Patterns Lighten Up Your Day!</h2>
        <aside>
  <img class="bild" src="./images/beispiel.jpg" >
  <img class="bild" src="./images/beispiel3.jpg" >
  <img class="bild" src="./images/beispiel4.jpg" >
  <img class="bild" src="./images/beispiel5.jpg" >
  <img class="bild" src="./images/beispiel6.jpg" >
  <img class="bild" src="./images/beispiel7.jpg" >
  <img class="bild" src="./images/beispiel8.png" >
  <img class="bild" src="./images/beispiel2.jpg" >
</aside>
<aside class="termine">

<ul><p>Kommende Veranstaltung:</p>
<li class="liLogo"><img class="logoSt" src="./images/MupaS.PNG"></li><br>
<p>Weitere Veranstaltungen:</p>
<li>17./18. August <br> München</li>
<li>31. August / 01. September <br> Hamburg</li>
<li>13./14./15. September <br> Leipzig</li>
<li>05./06. Oktober <br> Frankfurt</li>
<li>19./20. Oktober <br> Erfurt</li>
<li>26./27. Oktober <br> Köln</li>
<li>09./10. November <br> Salzburg</li>
</aside>
        <p class="infotext"> Music - Pattern - City <br> Das ist alles, was wir für unser Kunstprojekt brauchen. Und dich! <br>
        Kunst verbindet, Kunst schafft Erlebnisse und Kunst verändert. Das haben auch wir uns als Ziel gesetzt. Einen ganzen Tag lang wird deine Stadt
        in neuem Licht erstahlen und bist ein Teil davon. 
        In der ganzen Stadt verteilt befinden sich die unterschiedlichsten Musikinstrument bei bekannten Gebäuden. Suche dir einen Ort und ein Instrument aus,
        spiele und schauen selbst, wie das Gebäude in neuen Mustern erstahlt. 
        Natürlich kannst du dir das Gespielte und Gesehene danach auch auf unserer Website ansehen und dein persönliches Lichtspiel herunterladen. <br>
        Komm vorbei und verändere deine Stadt.
            Viel Spaß beim Spielen, Sehen und Staunen!
        </p>
        <h3>Finde dein Instrument:</h3>
        <div class="Maps">
            <button id="maps"><img src="./images/Stuttgart.PNG"></button>
        </div>
        <div class="button">
            <button>Galerie</button>
            <button>Feedback</button>
        </div>`
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);
        document.getElementById("maps").addEventListener("click", zeigeMaps);
        document.getElementById("home").addEventListener("click", init);
        document.getElementById("karte").addEventListener("click", zeigeMaps);
    }

    function zeigeMaps(): void {
        startseite.innerHTML = "";
        document.getElementById("inhalt").appendChild(startseite);
        startseite = document.createElement("div");
        let inhalt: string = `
        <h1 class="zweiteH1">Karte</h1>
        <p class="text2">Erkunden Sie die Stadt und finden Sie den passenden Ort und das passende Instrument für Sie!</p>
        <button id="schloss"></button>
            <img id="Mapskarte" src="./images/Stuttgart.PNG">
            
            <div id="infoSchloss"></div>
            <img class="logoS1" src="./images/MupaS.PNG">
       `
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);

        document.getElementById("schloss").addEventListener("click", infoKarte);
        document.getElementById("home").addEventListener("click", init);
    }

    function infoKarte(): void {
        let stelleInfo = document.createElement("div");
        let inhalt: string = `
        <div class="SchlossKlavier" id="SchlossInfo">
        <p>Klavier - Neues Schloss</p>
        </div>
       `
        stelleInfo.innerHTML = inhalt;
        document.getElementById("infoSchloss").appendChild(stelleInfo);

        document.getElementById("SchlossInfo").addEventListener("click", infoKlavier);
    }

    function infoKlavier(): void {
        startseite.innerHTML = "";
        document.getElementById("inhalt").appendChild(startseite);
        startseite = document.createElement("div");
        let inhalt: string = `
        <p class="zurück" id="zurück">zurück zur Karte</p>
        <img class="logoS" src="./images/MupaS.PNG">
        <div class="infoGebäude">
        <img class ="neuesSchloss" src="./images/neuesSchloss.jpg">
        <h2 class="h22"> Das Neue Schloss</h2>
        <p class="p3">Die einstige Residenz der württembergischen Herzöge und Könige bildet, 
        zusammen mit dem Alten Schloss und dem Schlossplatz, das städtebauliche Zentrum der Landeshauptstadt. 
        Heute noch dienen die prunkvollen Räume der Repräsentation des Landes.</p>
        <p class="p32">An unserem Klavier kannst du dem Neuen Schloss eine bunte Fassade zaubern. <br>
        Komm vorbei und spiel!</p>
        <img class ="piano" src="./images/piano.jpg">
        </div>
       `
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);

        document.getElementById("zurück").addEventListener("click", zeigeMaps);
        document.getElementById("home").addEventListener("click", init);
        document.getElementById("karte").addEventListener("click", zeigeMaps);
    }
}