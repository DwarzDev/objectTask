document.write("<h2>Ini Tugas Latihan 1</h2><hr>")

let advertisement = {
    seller : "Edward",
    nohp : 088912345678,
    item : "Laptop",
    brand : "Acer",
    type : "Aspire 3",
    years : 2020,
    ads : function() {
        document.write(`Hallo Gan.., Saya ${this.seller}, mau jual ${this.item} merek ${this.brand} ${this.type} tahun ${this.years}. Kalau berminat bisa Kontak WA saya ${this.nohp}.`)
    }
}
advertisement.ads()

document.write("<br>")

let dataSantri = {
    nama : "Edward Supratman",
    divisi : "Front End",
    myBio : function() {
        document.write(`Hallo.. saya ${this.nama}. Saya dari divisi ${this.divisi}. Salam Kenal yea..`)
    }

}

document.write("<br>")

let myPet = {
    animal : "Cat",
    name : "Milky",
    hungry : true,
    beriMakan : function(x){
        if (x){
        this.hungry = false;
        document.write(`Sekarang ${this.name} sudah makan dengan ${x}`)
        } else {
            document.write(`${this.name} Sekarang lapar!`)
        }
        
}
}
myPet.beriMakan("")
document.write("</br>", myPet.hungry)

document.write("<br><br>")


const bookStore = {
    judulBuku : "Belajar JavaScript sampe Khatam",
    penulis : "Edward S",
    stok : 100,
    jual : function(beli) {
        this.stok = this.stok - beli;
    }
}

bookStore.jual(50)
document.write(bookStore.stok)

document.write("<br>")

const batteryHP = {
    namaHP : "Xiaomi Redmi",
    batteryCapacity : 100,
    batteryActive : function(usage){
        if(usage == 'sosmed'){
            this.batteryCapacity -= 15;
        } else if(usage == 'game'){
            this.batteryCapacity -= 35;
        } else if(usage === 'chatting'){
            this.batteryCapacity -= 9
        } else if(usage === ''){
            this.batteryCapacity -= 1
        } else { this.batteryCapacity -= 0}
        return this.batteryCapacity;
    }
}

batteryHP.batteryActive("chatting")
document.write(`</br>`,batteryHP.batteryCapacity)