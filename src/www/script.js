function prihlasit() {
    let email = document.querySelector("#email").value;
    fetch('http://localhost:8000/prihlasit', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(odpoved => odpoved.text())
    .then(data => {odpovedNaZobrazeni = data;});
    document.querySelector('#odpoved').innerHTML = odpovedNaZobrazeni;
}

function odhlasit() {
    let email = document.querySelector("#email").value;
    fetch('http://localhost:8000/odhlasit', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(odpoved => odpoved.text())
    .then(data => {odpovedNaZobrazeni = data;});
    document.querySelector('#odpoved').innerHTML = odpovedNaZobrazeni;
}