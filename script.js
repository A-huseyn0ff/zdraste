
//axtardigimiz deyerin arrayin icinde olub,olmadigini yoxlayiriq

// class obj{
//     constructor(...arr){
//         this.arr=[...arr]
//     }
//     search(text){
//         if (this.arr.includes(text)) {
//             console.log('var');
//         }
//         else{
//             console.log('yoxdur');
//         }
//     }
// }
// let myarr=new obj('salam','brat','necesen')
// myarr.search('bra')
// let a=10

//-----------------------------------------------------------------

//ededin bolenlerinin sayini tap

// class eded {
//     constructor(number){
//         this.number=number
//     }
//     search(){
//         for (let a=0; a<=this.number;a++) {
//             if (this.number%a==0){
//                 console.log(a);
//             }
//         }
//     }
// }
// let mybolen=new eded(30)
// mybolen.search()

//-----------------------------------------------------------------
// class admin{
//     constructor(name,password){
// this.name=name;
// this.password=password;
//     }
//     login(){
//         let name=prompt('ad daxil edin')
//         let password=prompt('kodu daxil edin')
//         if (name===this.name && password===this.password) {
//             console.log('giris olundu');
//         }
//         else{
//             console.log('bele hesab tapilmadi');
//         }
//     }
// }
// let myhesab=new admin('ako_rei33','ah3869614')
// let myhesab1=new admin('ako_rei33','ah3869615')
// let myhesab2=new admin('ako_rei33','ah3869614')
// myhesab2.login()

// --------------------------------------------------------------------------

// miras eleme

// class Human{
//     constructor(ad,soyad,yas){
//         this.ad=ad;
//         this.soyad=soyad;
//         this.yas=yas;
//     }
//     logyas(){
//         console.log(this.yas);
//     }
// }
// class Doctor extends Human{
//     constructor(ad,soyad,yas,staj){
//         super(ad,soyad,yas)
//         this.staj=staj
//     }
// }
// class Topculuk extends Human{
//     constructor(ad,soyad,yas,nomre,pozisiya){
//         super(ad,soyad,yas)
//         this.nomre=nomre
//         this.pozisiya=pozisiya
//     }
// }
// const medoctor=new Doctor('akif','huseynov',19,2)
// const me=new Human('togrul','huseynov',19)
// const metopcu=new Topculuk('togrul','Ronaldo',19,7,'hucumcu')
// console.log(metopcu);
// // metopcu.logyas()

const arr=[
        {
            "id": 4,
           'description':'herkese salam',
            "name": "Chef Anton's Cajun bratva",
        },
        {
            "id": 3,
            'description':'herkese salam',
             "name": "Aref Anton's Cajun alexis",
        },
        {
            "id": 1,
            'description':'herkese salam',
             "name": "Bref Anton's Cajun adams",
        },
        {
            "id": 2,
            'description':'herkese salam',
             "name": "Dhef Anton's Cajun Seasoning", 
        }
  
]
let keyword='AREF                     '
//reqem sirasina gore

// arr.sort(function (a,b) {
//     return a.id-b.id
// })
//----------------------------------------
//elifba sirasina gore

// arr.sort(function (a,b) {
//     if (a.name>b.name) {
//         return 1;
//     } 
//     else{
//         return -1;
//     }
// })

//qisa yolu
// arr.sort((a,b)=>(a.name>b.name) ? 1: ((a.name<b.name)) ? -1:0)
//---------------------------------------

//keyword ile 

// const filtered=arr.filter((a)=>a.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase().trim())); 
// console.table(filtered);