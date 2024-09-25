// Meminta User untuk menginput namanya
// const namaUser = prompt("Insert Your Name");
// if (namaUser != null){
//     document.getElementById("nama-user").innerHTML = namaUser + "!";
// }

// JS untuk sticky header
window.addEventListener("scroll", function(){
    const header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = function() { changeLogo() }
function changeLogo(){
    const logoWebsite = document.getElementById("logo-website");
    if (window.scrollY > 0){
        logoWebsite.src = "assets/logo-agoez-white.png";
    } else {
        logoWebsite.src = "assets/logo-agoez.png";
    }
}

// JS untuk mengambil dan menampilkan form input dari User
function tampilPesan (){
    const namaLengkap = document.getElementById("nama-lengkap");
    const tglLahir = document.getElementById("tgl-lahir");
    const pesan = document.getElementById("pesan-text");
    let jenKel;
    if (document.getElementById("male").checked = true) {
        jenKel = document.getElementById("male");
    } else if (document.getElementById("female").checked = true) {
        jenKel = document.getElementById("female");
    } else {
        jenKel = "Jenis Kelamin Belum Dipilih";
    }

    // Bagian Thank You Message
    const thankYouSubmit = document.createElement("h1");
    const isiThankYou = document.createTextNode("Thank You For You Message!");
    thankYouSubmit.appendChild(isiThankYou);
    thankYouSubmit.style.color = "#173c80";

    document.getElementById("message-us-2").appendChild(thankYouSubmit);

    // Bagian Message nya
    const tampilNama = document.createElement("p");
    tampilNama 

    // console.log (namaLengkap.value + tglLahir.value + pesan.value + jenKel.value);
}
