/*
გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, 
(console.log()) ამ რიცხვების ჯამი
გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, 
marks
დაბეჭდეთ student ის სახელი
გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი
 თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
*/

let x = 87, y =65;
console.log (x+y)

let student = {
    "firstname" : "mariami",
    "lastname" : "mesablishvili",
    "age" : 33,
    "email" : "marimesablishvili@gmail.com",
    "marks" : [100, 95]
}
console.log (student.firstname)

let m = 45, n = 23;
if (m>n) {
    console.log (m+n);
} 
else {console.log (n)}

/* გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად 
თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
*/
let studentname = "mariami"
console.log ( "rise and shine", "mariami")
   

/* გამოაცხადეთ ცვლადი bonus და salary ცვლადები,
 salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, 
 დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, 
 თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
 დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი 
    მნიშვნელობა და შემდეგ დაბეჭდოთ bonus) */

let salary = 100 
let bonus
if (salary >= 2000)
{
    console.log (bonus = 0)
}
else 
{
    console.log (bonus = 100 * 10 / 100)
}

/*გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, 
c= a-ს და b-ს ჯამი. დაბეჭდეთ c.*/

let a= 23, b= a/2, c = a + b;
console.log (c)


/*გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel,
 Huawei, Xiaomi და დაბეჭდეთ,
 Phones მასივს ბოლოში დაამატეთ ახალი ელემენტი Motorola და დაბეჭდეთ მასივი
Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.
*/

 let phones = ["iphone", "samsung", "phixel", "Huawei", "Xiaomi" ]
 console.log (phones)
 
 phones.push("Motorola")
 console.log (phones)

 let i = 1;
 for (i; i<13; i++) {
    console.log (i)
 }

 










