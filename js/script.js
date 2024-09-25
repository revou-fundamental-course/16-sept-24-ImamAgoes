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
    const time = new Date ();
    const namaLengkap = "Your Name : " + document.getElementById("nama-lengkap").value;
    const tglLahir = "Your Birthday : " + document.getElementById("tgl-lahir").value;
    
    let jenKel;
    if (document.getElementById("male").checked = true) {
        jenKel = "Your Gender : " + document.getElementById("male").value;
    } else if (document.getElementById("female").checked = true) {
        jenKel = "Your Gender : " + document.getElementById("female").value;
    } else {
        jenKel = "Jenis Kelamin Belum Dipilih";
    }

    const pesan = "Your Message : " + document.getElementById("pesan-text").value;

    // Bagian Thank You Message
    const thankYouSubmit = document.createElement("h1");
    const isiThankYou = document.createTextNode("Thank You For You Message!");
    thankYouSubmit.appendChild(isiThankYou);
    thankYouSubmit.style.color = "#173c80";

    // Bagian untuk waktu sekarang
    const waktuSubmit = document.createElement("p");
    const isiWaktuSubmit = document.createTextNode(time);
    waktuSubmit.appendChild(isiWaktuSubmit);

    // Bagian Message, Nama Lengkap
    const tampilNama = document.createElement("p");
    const isiTampilNama = document.createTextNode(namaLengkap);
    tampilNama.appendChild(isiTampilNama);

    // Bagian Message, Tanggal Lahir
    const tampilTgl = document.createElement("p");
    const isiTampilTgl = document.createTextNode(tglLahir);
    tampilTgl.appendChild(isiTampilTgl);

    // Bagian Message, Jenis Kelamin
    const tampilJenKel = document.createElement("p");
    const isiTampilJenKel = document.createTextNode(jenKel);
    tampilJenKel.appendChild(isiTampilJenKel);

    // Bagian Message, Isi Text Pesan
    const tampilTextPesan = document.createElement("p");
    const isiTampilTextPesan = document.createTextNode(pesan);
    tampilTextPesan.appendChild(isiTampilTextPesan);

    // Bagian Tampil Hasil Submit Web
    document.getElementById("message-us-2").appendChild(thankYouSubmit);
    document.getElementById("message-us-2").appendChild(isiWaktuSubmit);
    document.getElementById("message-us-2").appendChild(tampilNama);
    document.getElementById("message-us-2").appendChild(tampilTgl);
    document.getElementById("message-us-2").appendChild(tampilJenKel);
    document.getElementById("message-us-2").appendChild(tampilTextPesan);
}
