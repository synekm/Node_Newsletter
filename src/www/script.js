var email;

function prihlasit() {
    let funkce = 'prihlasit';
    ziskejEmail();
    posliPost(funkce);
}

function odhlasit() {
    let funkce = 'odhlasit';
    ziskejEmail();
    posliPost(funkce);
}

function ziskejEmail() {
    email = $('#email').val();
}

function posliPost(funkce) {
    fetch(`http://localhost:8000/${funkce}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    });
}