
const axios = require('axios');
const fs = require('fs');

const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Kyiv&units=metric&appid=d7a9c2aa6483208653ed799e72f4386a';

let timer = setInterval(() => {
    axios.get(url).then((data) => {
        console.log(data);
    });
}, 900000);


    









