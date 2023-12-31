import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credential: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "GF was here",
    "price": 999,
    "description": "If you read this you will have an awesome year",
    "categoryId": 2,
    "images": ["https://www.icegif.com/wp-content/uploads/rick-roll-icegif-5.gif"]
}

postData(`${API}/products/`, data)
    .then(response => response.json())
    .then(data => console.log(data))
