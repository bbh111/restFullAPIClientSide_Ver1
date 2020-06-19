const BASE_URL = "http://localhost:8888/api_v1";

export var ENDPOINT = {
    person: {
        list: `${BASE_URL}/person`,
        personID: `${BASE_URL}/person`
    },
    account: {
      create: `${BASE_URL}/account/create`
    },

    search:{
      name: `${BASE_URL}/search/byName`
    }
}