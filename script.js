// random array oluştur
var arrayLength = 5;
var randomArray = [];
for(let i = 0; i<arrayLength; i++) {
    randomArray.push(Math.floor(Math.random() * (arrayLength - 1) + 1))
};

console.log("randomArray");
console.log(randomArray);

// random array'i gez
// gördüğün numaraları bir yere yaz
var array = [];

for(let i =0; i < randomArray.length; i++){ 
   if (array[randomArray[i]]){
      array[randomArray[i]] += 1
   } else {
      array[randomArray[i]] = 1
   }
}

// birden fazla olanı ekrana bastır
for (let i=0; i < array.length; i++){
   if (array[i] >= 2){
       console.log(i);
   }
}


