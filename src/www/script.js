var email;
var odpovedProZobrazeni;
var odpoved;
var funkce;
var zobrazit;

function prihlasit() {
    funkce = 'prihlasit';
    ziskejEmail();
    posliPost(funkce);
    //zpravaDleOdpovedi(odpovedProZobrazeni);
    zobrazitOdpoved(zobrazit);
}

function odhlasit() {
    funkce = 'odhlasit';
    ziskejEmail();
    posliPost(funkce);
    //zpravaDleOdpovedi(odpovedProZobrazeni);
    zobrazitOdpoved(zobrazit);
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
    }).then((res) => res.json()).then((data) => {odpoved = data;});
    console.log(odpoved);
}

function zpravaDleOdpovedi(odpovedProZobrazeni) {
    if (funkce == 'prihlasit') {
        if (odpovedProZobrazeni == '1') {
            zobrazit = "<p>E-mail byl přihlášen.</p>";
        } else {
            zobrazit = "<p>E-mail již byl přihlášen.</p>";
        }
    } else {
        if (odpovedProZobrazeni == '2') {
            zobrazit = "<p>E-mail byl odhlášen.</p>";
        } else {
            zobrazit = "<p>E-mail nebyl přihlášen.</p>";
        }
    }
}

function zobrazitOdpoved(zobrazit) {
    $("#odpoved").html(odpoved);
}