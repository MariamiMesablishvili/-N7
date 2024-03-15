/*დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) 
და დააბრუნებს შესაბამისს ტექსტს 
თუ ტიცხვები ტოლია : a  და b ტოლია
თუ a მეტია b ze : a  მეტია b -ზე
თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე*/

/* function udris (a, b) {
    return "a  და b ტოლია" 
}
function  metia (a, b) {
    return "a  მეტია b -ზე"
}

function naklebia (a, b) {
    return "a  ნაკლებია  b -ზე"
}
let a= 5, b= 7;
if (a == b) {
    console.log (udris (a,b))
}
else if (a > b) {
    console.log (metia (a, b))
}
else {console.log (naklebia (a, b)) }

/* დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ 
მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე */

/*function metia (a, b) {
    return "true"
}
function naklebia (a, b) {
    return "fals"
}

a = 5, b = 100;

if ( a + b > 100) {
    console.log (metia ( a, b))
}
else {
    console.log (naklebia (a, b))
}

/* დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას
 ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
a პირველი პარამეტრი - 1 ქულიანების რაოდენობა
b მეორე პარამეტრი -  2 ქულიანების რაოდენობა
c მესამე - 3 ქულიანების რაოდენობა 

function point (a, b, c) {
    let sum = (1*a + 2 * b + 3 * c)
    console.log (sum)
    return sum
}
  
let c = point ( 3, 4, 5)
console.log ("ჯამი=", c)


/*დაწერეთ ფუნქცია ორი პარამეტრით start და end , 
ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით 
 რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს 
    [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება) 

function number(start, end) {
    let arr = []
    for(let i = start; i <= end; i++) {
    arr.push(i)

    }
    
    console.log(arr)
    }

number(3, 6)*/




/*ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, 
დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 

let person = {
    firstname : "mariami",
    lastname : "mesabl", 
    age : 33
}
 function isadult (firstname, age) {
    if (age >= 18) {
        console.log(firstname, "is adult")
    }


 else 
    console.log (firstnam8e, "is not adult")
}

isadult (person.firstname, person.age)
isadult (person.firstname, 14)

გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი) 

let phone = ["iphone", "samsung", "pixel", "huawei", "xiaomi"]
for (let i=0; i < phone.length; i++)
console.log ( phone [i]) 

Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), 
დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი) 

let num = 23
while(num>=1) {
console.log(num)
num--;
} 

ან - 

let num = 1
while(num<=23) {
console.log(num)
num++
}

Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით ,
 გამოიყენეთ სასურველი ციკლი ( for, while) 
 n % 2 == 0 */

 let num = 2
 while (num <= 13) { 
    if (num % 2 == 0)
    console.log (num)
    num ++
 }








 








