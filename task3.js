const nilai = [2, 25, 4, 14, 17, 30, 8]

// Variabel nilaiawal, akhir dan data array
const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number" || !Array.isArray(dataArray)) { //Pengecekan Validator Tipe Data
        console.log("Data tidak benar");
        return 0;
    }

    if (nilaiAwal > nilaiAkhir) { //Pengecekan nilai awal lebih besar
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return 0;
    }

    if (dataArray.length <= 5) { //Pengecekan data kurang dari 5
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return 0;
    }

    const hasil = dataArray.filter(el => el >= nilaiAwal && el <= nilaiAkhir) //pengambilan data yg kurang dari nilai akhir 

    const akhir = hasil.sort((a, b) => a - b) //melakukan penyortiran

    console.log(hasil)
}

SeleksiNilai(5,20, nilai)
