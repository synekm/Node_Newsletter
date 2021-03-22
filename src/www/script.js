function prihlasit() {
    let email = document.querySelector("#email").value;
    if (email == "") {
        document.querySelector('#odpoved').innerHTML = "<p>Není zadaný E-mail.</p>"
    } else {
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
        .then(data => {document.querySelector('#odpoved').innerHTML = data;});
        document.querySelector("#email").value = "";
    }
}

function odhlasit() {
    let email = document.querySelector("#email").value;
    if (email == "") {
        document.querySelector('#odpoved').innerHTML = "<p>Není zadaný E-mail.</p>"
    } else {
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
        .then(data => {document.querySelector('#odpoved').innerHTML = data;});
        document.querySelector("#email").value = "";
    }
}