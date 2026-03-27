var abrir = false;

function mude() {
    const box = document.getElementById("menu-hiden");
        abrir = !abrir;

    if (abrir === true) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

function album1() {
    window.location.href = "album1.html"
}

function album1_alt() {
    window.location.href = "album1-alt.html"
}

function album2() {
    window.location.href = "album2.html"
}

function compra_album1() {
    window.location.href = "compra_album1.html"
}

function compra_album1_2() {
    window.location.href = "compra_album1_alt.html"
}

function compra_album2() {
    window.location.href = "compra_album2.html"
}