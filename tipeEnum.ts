//enum merupakan jenis data yang sudah fix tidak bisa dirubah seperti tipe data yang lain. enum berisi/ber-value index
enum Gender {Male, Female, Unknown};
let jenisKelamin:Gender = Gender.Female;
console.log(jenisKelamin)

//untuk index dari enum dapat di custom seperti dibawah ini
enum Kendaraan{Motor=-1, Mobil=0, Sepeda=1}
let jenisKendaraan :Kendaraan = Kendaraan.Mobil;
console.log(jenisKendaraan)