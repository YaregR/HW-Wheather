
const axios = require('axios');
const fs = require('fs');

const key = 'd7a9c2aa6483208653ed799e72f4386a';
const id = 703448;

const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${key}`;

let timer = setInterval(() => {
    axios.get(url).then((data) => {
        const nextDay = data.data.list[7];
        const {main, dt_txt} = nextDay;
        const res = `${dt_txt} = ${main.temp} C, ` + '\n';
        fs.appendFileSync('file.txt', res, function (err) {
            if (err) throw err;
        });
    });    
}, 3000);

    









