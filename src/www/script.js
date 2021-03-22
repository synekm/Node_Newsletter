var email;
var odpovedNaPorovnani;
var funkce;
var zobrazit;

function prihlasit() {
    funkce = 'prihlasit';
    ziskejEmail();
    posliPost(funkce);
    zpravaDleOdpovedi(odpovedNaPorovnani);
    zobrazitOdpoved();
}

function odhlasit() {
    funkce = 'odhlasit';
    ziskejEmail();
    posliPost(funkce);
    zpravaDleOdpovedi(odpovedNaPorovnani);
    zobrazitOdpoved();
}

function ziskejEmail() {
    email = document.querySelector("#email").value;
}

function posliPost(coDelat) {
    fetch(`http://localhost:8000/${coDelat}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(odpoved => odpoved.text())
    .then(data => {odpovedNaPorovnani = data;console.log(odpovedNaPorovnani)});
}

function zpravaDleOdpovedi(odpovedNaZobrazeni) {
    if (funkce == 'prihlasit') {
        if (odpovedNaZobrazeni == '1') {
            zobrazit = "<p>E-mail byl přihlášen.</p>";
        } 
        if (odpovedNaZobrazeni == '-1') {
            zobrazit = "<p>E-mail již byl přihlášen.</p>";
        }
    } else {
        if (odpovedNaZobrazeni == '2') {
            zobrazit = "<p>E-mail byl odhlášen.</p>";
        } 
        if (odpovedNaZobrazeni == '-2') {
            zobrazit = "<p>E-mail nebyl přihlášen.</p>";
        }
    }
}

function zobrazitOdpoved() {
    document.querySelector("#odpoved").innerHTML = zobrazit;
}