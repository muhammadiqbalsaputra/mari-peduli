
const navbar = document.getElementById("navbar");


function handleScroll() {
    if (window.scrollY > 20) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScroll);


document.getElementById("submitKeluhan").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    const tanggalLahir = document.getElementById("tanggaLahir").value;
    const noTelp = document.getElementById("noTelp").value;
    const keluhan = document.getElementById("keluhan").value;

    if (nama && alamat && jenisKelamin && tanggalLahir && noTelp && keluhan) {
        alert(`Terimakasih ${nama} inputan anda berhasil kami simpan`)
    }else{
        alert("Isi Inputan Dengan Benar")
    }
});
