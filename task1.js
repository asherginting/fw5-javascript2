/* 10 Method Bawaan Javascript (Built In Function) */

/* 
1. Array.join() 
berfungsi untuk menggabungkan elemen array menjadi sebuah string. 
Sebuah argumen bisa diinputkan kedalam method ini yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array
*/

// Contoh :
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.join());         //hasil: 1,2,3,4,5,a,b,c,d,e


/* 
2. Array.reverse()
digunakan untuk membalikkan urutan dari elemen di dalam array. Method ini akan mengubah array asal
*/

// Contoh :
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());         //hasil: 1,2,3,4,5,a,b,c,d,e


/* 
3. Array.sort()
digunakan untuk mengurutkan elemen dari array. Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad
*/

// Contoh : 
var arr2 = [3,5,2,8,,,1,31,22,44,33,11];
arr2.sort();
console.log(arr2.toString());         //hasil: 1,11,2,22,3,31,33,4


/* 
4. Array.concat()
berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat().
*/

// Contoh :
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());         //hasil: 1,2,3,4,a,b,c,d
  

/* 
5. Array.slice()
digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. 
Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.
*/

// Contoh :
var arr1 = [1,2,3,4,"a","b","c","d"];
  
//slice dari index ke 2 sampai 4
var arr2 = arr1.slice(2,4)
console.log(arr2.toString());         //hasil: 3,4
  

/* 
6. Array.splice()
digunakan untuk memotong array, menambahkan elemen array, bahkan melakukan keduanya sekaligus.
*/

// Contoh :
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());     // hasil: 1,2,3,4,a,b,c,d
  

/* 
7. Array.push() 
digunakan untuk menambahkan dan mengurangi elemen dari array.
*/

// Contoh :
var arr1 = [];
  
arr1.push("a","b","c");
console.log(arr1.toString());   // hasil: a,b,c
  


/* 
8. Array.unshift()
kan menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada. 
*/

// Contoh :
var arr1 = [];
  
arr1.unshift("a","b","c");
console.log(arr1.toString());   // hasil: a,b,c


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