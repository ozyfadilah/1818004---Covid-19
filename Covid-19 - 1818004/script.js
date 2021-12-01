var url = 'https://covid19.mathdro.id/api/confirmed';

var req = new Request(url);
const table = document.querySelector(".table tbody")

fetch(req).then(response => response.json())
    .then(data => {
        let tr = ``;
        data.forEach((covid, k) => {
            tr += `<tr>
            <td>${k + 1}</td>
            <td>${covid.countryRegion}</td>
            <td>${Date(covid.lastUpdate)}</td>
            <td>${covid.deaths} Jiwa</td>
            <td>${covid.confirmed} Jiwa</td>
            <td>${covid.lat}</td>
            <td>${covid.long}</td>        
            </tr>`
        });
        table.innerHTML = tr;
    });


