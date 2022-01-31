var makanan = {
    namaDepan : "ayam",
    namaBelakang : "bakar",

    tampilkan : function () {
        console.log(`nama ${this.namaDepan} ${this.namaBelakang}`);
    }
}

console.log(makanan.namaDepan);
makanan.tampilkan()