/* 10 Method Bawaan Javascript (Built In Function) */

/* 
1. Array.join() 
berfungsi untuk menggabungkan elemen array menjadi sebuah string. 
Sebuah argumen bisa diinputkan kedalam method ini yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array
*/

// Contoh :
const buah = ['apel', 'jagung', 'pisang'];
const hasil = buah.join();
console.log(hasil); // apel,jagung,pisang


/* 
2. Array.reverse()
digunakan untuk membalikkan urutan dari elemen di dalam array. Method ini akan mengubah array asal
*/

// Contoh :
const numbers = [5, 4, 3, 2, 1];
console.log(numbers); // [5, 4, 3, 2, 1]

const numbersReverse = numbers.reverse();

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
// console.log(numbersReverse); // [ 1, 2, 3, 4, 5 ]


/* 
3. Array.sort()
digunakan untuk mengurutkan elemen dari array. Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad
*/

// Contoh : 
const minuman = ['jus', 'air', 'lemon tea', 'teh', 'kopi'];
minuman.sort();
console.log(minuman); // [ 'air', 'jus', 'kopi', 'lemon tea', 'teh' ]


/* 
4. Array.concat()
berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat().
*/

// Contoh :
const huruf = ['a', 'b', 'c'];
const angka = [1, 2, 3];

const hasilTerakhir = huruf.concat(angka);

console.log(hasilTerakhir); // [ 'a', 'b', 'c', 1, 2, 3 ]

/* 
5. Array.slice()
digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. 
Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.
*/

// Contoh :
const hewan = ['kucing', 'bebek', 'ayam', 'kambing', 'semut'];

const hewanBaru = hewan.slice(1, 4);

console.log(hewanBaru); // [ 'bebek', 'ayam', 'kambing' ]

/* 
6. Array.splice()
digunakan untuk memotong array, menambahkan elemen array, bahkan melakukan keduanya sekaligus.
*/

// Contoh :
const hari = ['senin', 'selasa', 'ayam', 'bebek', 'rabu', 'kamis'];

hari.splice(2, 2);

console.log(hari); // [ 'senin', 'selasa', 'rabu', 'kamis' ]

/* 
7. Array.push() 
digunakan untuk menambahkan dan mengurangi elemen dari array.
*/

// Contoh :
const mahasiswa = ['budi', 'tanto'];
const panjang = mahasiswa.push('sukirman', 'sutisno');

console.log(mahasiswa); // [ 'budi', 'tanto', 'sukirman', 'sutisno' ]
// console.log(panjang); // 4


/* 
8. Array.unshift()
kan menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada. 
*/

// Contoh :
const menu = ['nasgor', 'ayam penyet'];

const jumlahMenu = menu.unshift('Mie Ayam', 'Capcay');

console.log(menu); // [ 'Mie Ayam', 'capcay', 'Nasgor', 'ayam penyet' ]


/* 
9. Array.toString( 
untuk menkonversi array menjadi string. 
Dalam contoh-contoh yang kita lakukan dalam tutorial ini, hampir semuanya menggunakan method toString untuk menampilkan hasil array.
*/

// Contoh :
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());           // hasil: 1,2,3,4,a,b,c,d


/* 
10. Array.trim() 
berfungsi untuk menghapus spasi yang terdapat diawal dan diakhir sebuah string
*/

// Contoh :
const kata2 = "Kami sedang Belajar Javascript"

console.log( kata2.toUpperCase() );