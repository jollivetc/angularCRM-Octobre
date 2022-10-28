

http://ma.com/api/consumers

    GET http://ma.com/api/consumers
            Tous les clients
    GET http://ma.com/api/consumers/ID
            le client id = ID
    POST http://ma.com/api/consumers + client
        créer un client => 201 location
    PUT http://ma.com/api/consumers/ID + client
        update du Client ID
    DELETE http://ma.com/api/consumers/ID
        effacer le client ID

    
    DELETE http://ma.com/api/consumers
        effacer tous les clients

    PATCH http://ma.com/api/consumers/ID + morceau du client
        update du client ID 

    HEAD http://ma.com/api/consumers
        http://ma.com/api/consumers/ID
        header reponse
    