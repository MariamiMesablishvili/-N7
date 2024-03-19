1. /*დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n)
 და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს 

 function metia (m,n)
 {
    if ( m == n)  {
        return 0
    }
    else if( m>n ) {
        return "m"
    }

    else if( n>m ) {
        return "n"
    }
    
}
console.log(metia (2,4))

2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), 
დააბრუნეთ რიცხვების ჯამი 

 function jami (a, b) {
    return a + b 
 }

 console.log (jami (2, 4) )

 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს
  ( ფუნქციას არ აქვს პარამეტრი) 

 function person () {
    console.log ("mariami mesablishvili")
 }
 person();


 4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname 
  დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ 
    სახელს და ფუნქციის გარეთ ბეჭდავთ)  

    function sruli(first, last) {
        return  first + last
    }
    console.log (sruli ("mari ", "mesa") )

    5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) 
    და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) 
    რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა 
        დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის
         გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
         Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი) 
         

function num (n) { 
   
let x = 1;
    for (let i = 1; i<= n; i++) {
    x *= i;
    }
    return x;
     }
     
console.log (num (3))


6. Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - 
რომელსაც აქვს შემდეგი properties: firstname, lastname, age, 
marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი რომელიც 
აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად 
არ უნდა დაწეროთ ) 
დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი) 

let student = {
    firsname: "mariammi",
    lastname: " mesabl",
    age: 33,
    marks : [4, 7, 5, 3, 2],

   studentsScore () {
        return this.firsname + this.lastname
 
    }
}
console.log (student.studentsScore()) 

7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება
( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს - arasworia */

let student = {
    firsname: "mariammi",
    lastname: " mesabl",
    age: 33,
    marks : [4, 7, 5, 3, 2]
    }
   

function max(this.marks)  { 
let sum = 0;
for (let i = 0; i<= marks.lengsth ; i++) {
sum = sum + marks[i]; 

return sum }

}
console.log (max (student.marks))



 /* 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი 

 let student = {
    firsname: "mariammi ",
    lastname: " mesabl",
    age: 33,
    marks : [4, 7, 5, 3, 2],

   studentsScore () {
        return this.firsname + this.age
 
    }
}
console.log (student.studentsScore()) */









