// Meminta User untuk menginput namanya
const namaUser = prompt("Masukkan nama kamu");
if (namaUser != null){
    document.getElementById("nama-user").innerHTML = namaUser + "!";
}

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