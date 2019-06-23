var mupacity;
(function (mupacity) {
    window.addEventListener("load", init);
    let startseite = document.createElement("div");
    function init(_event) {
        let inhalt = `
        
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
<li>03./04. August <br> Stuttgart</li><br>
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
        </div>`;
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);
        document.getElementById("maps").addEventListener("click", zeigeMaps);
    }
    function zeigeMaps() {
        startseite.innerHTML = "";
        document.getElementById("inhalt").appendChild(startseite);
        startseite = document.createElement("div");
        let inhalt = `
        <h1>Karte</h1>
        <p>Erkunden Sie die Stadt und finden Sie den passenden Ort und das passende Instrument für Sie!</p>
            <img id="Mapskarte" src="./images/Stuttgart.PNG">
            <button id="schloss"></button>
            <div id="infoSchloss"></div>
       `;
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);
        document.getElementById("schloss").addEventListener("click", infoKarte);
    }
    function infoKarte() {
        let stelleInfo = document.createElement("div");
        let inhalt = `
        <div class="SchlossKlavier" id="SchlossInfo">
        <p>Klavier - Neues Schloss</p>
        <a href="">weitere Informationen</a>
        </div>
       `;
        stelleInfo.innerHTML = inhalt;
        document.getElementById("infoSchloss").appendChild(stelleInfo);
        document.getElementById("SchlossInfo").addEventListener("click", infoKlavier);
    }
    function infoKlavier() {
        startseite.innerHTML = "";
        document.getElementById("inhalt").appendChild(startseite);
        startseite = document.createElement("div");
        let inhalt = `
        <div class="infoGebäude">
        <img class ="neuesSchloss" src="./images/neuesSchloss.jpg">
        <h1> Das Neue Schloss</h1>
        <p>Die einstige Residenz der württembergischen Herzöge und Könige bildet, 
        zusammen mit dem Alten Schloss und dem Schlossplatz, das städtebauliche Zentrum der Landeshauptstadt. 
        Heute noch dienen die prunkvollen Räume der Repräsentation des Landes.</p>
        </div>
       `;
        startseite.innerHTML = inhalt;
        document.getElementById("inhalt").appendChild(startseite);
    }
})(mupacity || (mupacity = {}));
//# sourceMappingURL=main.js.map