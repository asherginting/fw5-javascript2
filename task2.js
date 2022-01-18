const name = [          //Variabel Nama
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = (keyword, limit, callback) => {
    const names = name.filter(el => el.toLowerCase().includes(keyword)) //Melakukan penyaringan setiap karakter dengan lowercase dan memeriksa apakah string sesuai dengan keyword

    const result = names.slice(0, limit) //panjang array dibatasi dengan limit

    callback(result)
}

searchName("an", 3, (result) => {
    console.log(result);
})