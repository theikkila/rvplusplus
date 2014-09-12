# /bulkpackages

Tukkupakkaukset esim. lavallinen 0,5L muumilimua

## Kentät

| Nimi        | Tyyppi   | Kuvaus                                    |
| ----------- | -------- | ----------------------------------------- |
| _id         | ObjectID | Tukkupakkauksen id                        |
| name        | String   | Tukkupakkauksen nimi                      |
| created     | Date     | Koska tukkupakkaus on lisätty kantaan     |
| description | String   | Tukkupakkauksen kuvaus                    |
| eanCode     | String   | Tukkupakkauksen EAN-koodi                 |
| product     | ObjectID | Tukkupakkauksen sisältämien tuotteiden ID |
| count       | Number   | Tuotteen määrä tukkupakkauksessa          |


## Metodit

### addProducts()
** Palauttaa päivitetyn tuotteen **

Tämä metodi päivittää tukkupakkaukseen liittyvää tuotetta niin, että se lisää tukkupakkauksen sisältämien tuotteiden määrän tuotteeseen.


## GET /bulkpackages
Palauttaa kaikki kannan tukkupakkaukset
