# /products

Tuotteet. Esim Muumilimu 0,5 L

## Kentät

| Nimi        | Tyyppi   | Kuvaus                         |
| ----------- | -------- | ------------------------------ |
| _id         | ObjectID | Tuotteen id                    |
| name        | String   | Tuotteen nimi                  |
| created     | Date     | Koska tuote on lisätty kantaan |
| description | String   | Tuotteen kuvaus                |
| eanCode     | String   | Tuotteen EAN-koodi             |
| count       | Number   | Tuotteen määrä varastossa      |
| flags       | Object   | Tuotteeseen liittyvät liput    |


### flags

| Nimi            | Tyyppi   | Kuvaus                                        |
| --------------- | -------- | --------------------------------------------- |
| flags.unlimited | Boolean  | Onko tuote loppumaton                         |
| flags.cantby    | Boolean  | Voiko tavallinen käyttäjä ostaa tätä tuotetta |



## GET /products
Palauttaa kaikki kannan tuotteet
