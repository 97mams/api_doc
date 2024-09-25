export const getAllData = [
    [{
        "id": 1,
        "name": "Team Name",
        "wins": 10,
        "losses": 5,
        "draws": 0,
        "point": 30,
        "match": 15
    },
    {
        "id": 2,
        "name": "Team2 Name",
        "wins": 3,
        "losses": 12,
        "draws": 0,
        "point": 9,
        "match": 15
    },]
]

export const getData = [{
    "id": 2,
    "name": "name",
    "wins": 3,
    "losses": 12,
    "draws": 0,
    "point": 9,
    "match": 15
},]


export const postData = [
    {
        "name": "Team2 Name"
    },
    [{
        "message": "Team successfully added",
        "team": {
            "id": 3,
            "name": "Team2 Name",
            "wins": 0,
            "losses": 0,
            "draws": 0,
            "point": 0,
            "match": 0
        }
    }
    ]

]

export const putData = [
    {
        "wins": 1,
        "losses": 0,
        "draws": 0,

    }, {
        "message": "Team successfully added",
        "team": {
            "id": 3,
            "name": "Team Name",
            "wins": 1,
            "losses": 0,
            "draws": 0,
            "point": 3,
            "match": 1
        }
    }

]