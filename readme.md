# Live link naar demo:

https://polar-oasis-14072.herokuapp.com

# 🏀 NBA Players Index

Tijdens dit vak (Progressive Web Apps) werken we verder aan de webapp die we hebben gemaakt in Web Apps From Scratch. Het doel van dit vak is om een server-sided progressive web app te maken.
<br><br>
Hieronder vertel ik over de NBA-app die ik heb gemaakt.
<br><br>

## ❓ Concept

Het concept van deze app is om van alle spelers, indien aanwezig, de eigenschappen te zien. Ook kun je natuurlijk zien welke spelers er bij welk team spelen. Deze app is dus eigenlijk een index voor alle NBA spelers.

## 💻 API

Ik maak gebruik van de gratis API genaamd "Free NBA" van theapiguy.<br>
Deze API heeft de volgende endpoints:
- Teams
- Players
- Stats
- Games 

De endpoints die ik gebruik zijn:
- Teams
- Players

Deze API zit complex in elkaar, wat voor mij veel problemen heeft opgeleverd met het verkrijgen van de data uit de API.
<br>

De endpoint in het project zijn:
- `/teams` (Alle 30 NBA teams)
- `/teams/${teamName}` (Spelers per team)
- `/teams/${teamName}/more` (Voor meer spelers)
<br><br>

## 📊 Performance optimalisaties

Tijdens dit vak moeten we de performance optimaliseren.
Ik heb voor mijn project gebruik gemaakt van een "Load more" knop.
<br><br>
Aangezien mijn API een hele complexe structuur heeft, namelijk per pagina 100 spelers, moet er door elke pagina geloopt worden aangezien er 36 pagina's zijn.
<br><br>
De gebruiker moest dus heel lang wachten voordat het resultaat zag. Ik heb daarom een "Load more" knop geimplementerd, die nadat de eerste paar spelers in zijn geladen, de rest van de spelers pas inlaadt.
<br><br>
Dit zorgt voor minder wachttijd bij het klikken van een team, en dus zorgt dit voor een prettigere gebruikerservaring.
<br><br>

## 🔄 Git clone
Om de repository van PWA te clonen, open je de terminal in je editor. Vervolgens navigeer je met "cd" naar de juiste map.
<br>
Hier type je:

- git clone "link van repository PWA"

Als de repository is gecloned, krijg je de bestanden in de geselecteerde map, en kun je hier aan verderwerken.
<br><br>

## 🔨 Installeren npm
Om verschillende packages en modules van Node te installeren, gebruik je npm. In mijn app gebruik ik Express en Axios.
Om deze modules te installeren, vul je het volgende in op je terminal:

- npm install axios

Of

- npm install express
<br><br>

## 📡 Server opzetten

Om de server van je app op te zetten, gerbuik ik de volgende code:

app.listen(port, function () {
	console.log(`Application started on port: ${port}`);
});

Hierbij is de port = 6969

De app kun je openen op localhost:6969
<br><br>
Omdat de app live op Heroku staat, werkt de localhost niet meer.