rvplusplus
==========

TKO-älyn ruokavälityksen seuraava iteraatio

Työkaluina on trendikkäät ja nopeat työkalut. EI JAVAA!

Tarkoituksena on rakentaa uusittu järjestelmä seuraavilla palikoilla



| DB                | BACKEND (json-api)            | FRONTEND    |
| ----------------- | ----------------------------- | ----------- |
| MongoDB           | Node.js                       | HTML5       |
|                   | Mongoose                      | Bootstrap 3 |
|                   | Express4                      | Angular.js  |
|                   | OAuth2                        |             |




Tärkeintä on:
 - Dokumentoida API-hyvin, jotta siitä olisi jotain hyötyä esim. kätevän mobiili-appsin tekemiseen
 - Rakentaa tietoturvallinen API
 - Tehdä kattavat testit (TDD!!!!)
 - Saada aikaiseksi helppokäyttöinen ja toimintavarma järjestelmä nykyisen purkan tilalle.

Vähemmän tärkeätä on:
 - Saada aikaiseksi hyvännäköinen järjestelmä (jokaisen pieni sisäinen webdesigner tietää että pelkkä Bootstrap ei näytä hyvältä)
 - Implementoida hieno RFID-autentikointi esim. matkakortin avulla

ToDo:
 - API:n modelien speksaus
 - API:n implementointi

Tuotteista mietittyä:
	Tukkupakkaukselle omat abstraktit tuotteet joiden avulla saadaan lisättyä useampia tuotteita kerrralla
	Tuotteiden on tuettava negatiivista veloitusta ostajalle (pullonpalautus)
	Tuotteiden on tuettava tuotteita joiden määrä ei vähene koskaan.
