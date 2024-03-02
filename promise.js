

function bilgiGetir(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(data)
        },3000)
        // resolve(data)
    })
}
function bilgiGetir2(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(data)
        },5000)
        // resolve(data)
    })
}
console.log(bilgiGetir("Ahmet"))
bilgiGetir2("Yasin").then(response=>console.log(response))
bilgiGetir("beken").then(function(response){
    console.log(response)
})

function sayiKontrol(sayi){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(sayi%2==0){
                resolve("Tebrikler kazandınız.")
            }
            else{
                reject("Kaybettiniz.")
            }
        },8000)
    })
}

sayiKontrol(5)
.then(x=>console.log(x)) 
.catch(e=>console.log(e))