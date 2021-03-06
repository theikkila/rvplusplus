rvplusplus
==========

TKO-älyn ruokavälityksen seuraava iteraatio
[![Build Status](https://travis-ci.org/theikkila/rvplusplus.svg?branch=master)](https://travis-ci.org/theikkila/rvplusplus)

**RV++ client on siirretty toiseen repoon: [rvplusplus-client](https://github.com/theikkila/rvplusplus-client)**

Työkaluina on trendikkäät ja nopeat työkalut. EI JAVAA!

Tarkoituksena on rakentaa uusittu järjestelmä seuraavilla palikoilla



| DB                | BACKEND (json-api)            | FRONTEND    |
| ----------------- | ----------------------------- | ----------- |
| MongoDB           | Node.js                       | HTML5       |
|                   | Mongoose                      | Bootstrap 3 |
|                   | Express4                      | Angular.js  |
|                   | OAuth2                        |             |

## API

Tämänhetkinen api on dokumentoitu [Swaggerin](http://swagger.io/) avulla ja on selattavissa [täällä](http://rvplusplus.eapp.fi/api-docs/)


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

# Kuinka tätä ajetaan?

```bash

# Masennetaan riippuvuudet
npm install

# conffataan
vim config.js

# startataan
node server.js

```
