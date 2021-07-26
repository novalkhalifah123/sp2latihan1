function hitungLuasPersegiPanjang(panjang,lebar){
    luas = panjang * lebar

    document.write("Panjang : " + panjang + "<br/>");
    document.write("Lebar : " + lebar + "<br><br/>");
    document.write("Luas Persegi Panjang : " + luas)
}

panjang = prompt("Masukan Panjang");
lebar = prompt("Masukan Lebar");

hitungLuasPersegiPanjang(panjang, lebar)