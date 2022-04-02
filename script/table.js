let data = [{

    "id": 1,

    "model": "m3",

    "price": 10000000,

    "power": 500,

    "description": null,

    "brandName": "BMW"

}, {

    "id": 2,

    "model": "m2 competition",

    "price": 100000000,

    "power": 1000,

    "description": null,

    "brandName": "BMW"

}]

for (let key in data) {
        let row = document.createElement('tr')
        row.innerHTML = `<td>${data[key].id}</td>
                      <td>${data[key].model}</td>
                      <td>${data[key].price}</td>
                      <td>${data[key].power}</td>
                      <td>${data[key].description}</td>
                      <td>${data[key].brandName}</td>
                     `
        document.querySelector('.car').appendChild(row)
    }