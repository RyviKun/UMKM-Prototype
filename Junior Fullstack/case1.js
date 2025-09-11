fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
    ]

//fungsi untuk mengambil buah buah yang ada dan mengambil "fruitName" yang unik
function CountFruits(fruits) {
  const lowercaseNames = fruits.map(item => item.fruitName.toLowerCase());
  const uniqueFruits = [...new Set(lowercaseNames)];
  return uniqueFruits;
}


//fungsi untuk mengolompokan berdasarkan "fruitType"
function GroupFruits(fruits) {
    //variable groups menjadi wadah untuk untuk pengelompokan buah berdasarkan "fruitType" 
  const groups = {};
    
    //untuk setiap item, akan diambil "fruitType" dan dimasukan 
  fruits.forEach(item => {
    const type = item.fruitType;
    //jika Object Groups belum memiliki sebuah type, maka variabel baru akan di inisiasikan
    if (!groups[type]) {
      groups[type] = {
        fruits: [],
        totalStock: 0
      };
    }
    //memasukan buah ke dalam object group sesuai "fruitType"
    groups[type].fruits.push(item.fruitName);
    //menambahkan total stocl group sesuai "fruitType"
    groups[type].totalStock += item.stock;
  });

  return groups;
}


const uniqueFruits = CountFruits(fruits);
//Jawaban nomor 1 dari case 1
console.log("Buah yang dimiliki Andi:", uniqueFruits);

const groupedFruits = GroupFruits(fruits);
//
console.log("Buah-buah yang ada di masing-masing wadah:");

//Jawaban nomor 2 dan 3 dari case 1
//untuk setiap Wadah, print konten dalam wadah tersebut
for (const [type, data] of Object.entries(groupedFruits)) {
  console.log(`Wadah: ${type}`);
  console.log(`  Buah: ${data.fruits.join(", ")}`);
  console.log(`  Total Stock: ${data.totalStock}`);
}

//Komentar pada nomor 4 dari case 1
//Data fruitId ada yang sama-sama 5, tapi tidak mempengaruhi perhitungan .
//Buah unik dihitung dari fruitName, contohnya Apel sama apel, dianggap satu.
//Wadah dipecah sesuai fruitType, total stock diitung semua buah yang masuk wadah.
//Kalau mau lebih rapi, mungkin nama buah bisa dibikin konsisten huruf besar/kecil, fruitId juga sebaiknya unik.
