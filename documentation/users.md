# /users

Käyttäjät. Esim Kalle Kallonen

## Kentät

| Nimi        | Tyyppi           | Kuvaus                                                |
| ----------- | ---------------- | ----------------------------------------------------- |
| _id         | ObjectID         | Käyttäjän id                                          |
| name        | String           | Käyttäjän nimi                                        |
| created     | Date             | Koska käyttäjä on lisätty kantaan                     |
| access      | Date             | Koska käyttäjä on viimeksi kirjautunut järjestelmään  |
| active      | Boolean          | Onko käyttäjä aktiivinen ts. voiko käyttäjä kirjautua |
| email       | String           | Käyttäjän sähköpostiosoite                            |
| username    | String           | Käyttäjän käyttäjätunnus                              |
| password    | String           | Käyttäjän salasana (ei saatavissa API:n kautta)       |
| HYusername  | String           | Käyttäjän sähköpostiosoite                            |
| permissions | Array of Strings | Käyttäjän oikeudet                                    |

## Metodit

### setPassword(passwd)

Tämä metodi luo selväkielisestä salasanasta bcryptillä hashin ja tallentaa sen.

### checkPassword(passwd, cb)

Tämä metodi tarkistaa onko passwd käyttäjän salasana ja palauttaa sen callbackin parametrinä (Boolean).

**cb(err, result){  }**


## GET /products
Palauttaa kaikki kannan tuotteet
