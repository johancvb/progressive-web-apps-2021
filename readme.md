# Week 1

In deze week heb ik voor het eerst gewerkt met Node.js en EJS. Ik had hier nog nooit eerder mee gewerkt, dus de eerste paar dagen waren vooral tutorials kijken, vragen stellen aan teamgenoten, en de Noob-session gevolgd van Joost.

Dit heeft erg geholpen, aangezien ik meer inzicht kreeg in het programmeren met Node.js en EJS. 

Aangezien ik de eerste paar dagen al achterliep qua kennis, heb ik mijn app nog niet volledig om kunnen zetten naar Node. Omdat ik nu meer kennis heb, ga ik er van uit dat het vanaf volgende week weer vloeiender gaat.


## Git clone
Om de repository van PWA te clonen, open je de terminal in je editor. Vervolgens navigeer je met "cd" naar de juiste map.
<br>
Hier type je:

- git clone "link van repository PWA"

Als de repository is gecloned, krijg je de bestanden in de geselecteerde map, en kun je hier aan verderwerken.

## Installeren npm
Om verschillende packages en modules van Node te installeren, gebruik je npm. In mijn app gebruik ik Express en Axios.
Om deze modules te installeren, vul je het volgende in op je terminal:

- npm install axios

Of

- npm install express

## Server opzetten

Om de server van je app op te zetten, gerbuik ik de volgende code:

app.listen(config.port, function () {
	console.log(`Application started on port: ${config.port}`);
});

Hierbij is de port = 3000

De app kun je openen op localhost:3000