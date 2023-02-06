  
let jualMobil = {
    nama : "Tompel",
    merek : "Avanza",
    tahun : 2017,
    iklan : function() {
        document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} , bekas`)
    }
}
document.write("</br><hr><h2>Ini Tugas Latihan 2</h2>")
jualMobil.iklan()