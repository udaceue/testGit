// const container = document.querySelector(".container");
// const parent2 = document.querySelector(".parent1");
// const parent1 = document.querySelector(".parent2");
// const child = document.querySelector(".child");


// const userLeft = false
// const userWatchingCatMemes= false


// function watchingTutorials (callback, errorCallback){
//   if(userLeft)
//   errorCallback(
//     {
//     namee: "UserLeft ",
//     message: ":( maybe he ll back "
//     }
//   )
//     else if (userWatchingCatMemes){
//       errorCallback({
//       namee: "user isn't here",
//       message: "User watching cat memes"
//       }
//       )
//     }
//     else{
//       callback("User's here We're welcome")
//     }
// }


// watchingTutorials((erkl) => {
//   console.log(`${erkl}`)
// }, (error) => {
//   console.log(`failed ${error.namee} ${error.message}`)
// }
// )


// function makeRequest(location){
//   return new Promise((resolve, rejected) => {
//     console.log(`making request to ${location}`)
//           if(location == "google")
//             {
//               resolve(`Google says hi`)
//             }
//             else{
//               rejected("We can talk only to google")
//             }
//   })
// }

// function processRequest (response) {
//           return new Promise((resolve, rejected) => {
//             console.log("Processing response")
//             resolve(`Extra information + ${response}`)
//           })
// }

// makeRequest("facebook").then((response) => {
//   console.log(`Response Received`)
//   return processRequest(response)
// })
//   .then((processedResponse) => {
//     console.log(`Dziala? ${processedResponse}`)
//   }).catch(err => {
//     console.log(`upsi ${err}`)
//   })

// function luckGenerator (callback)
// {
//   return new Promise((resolve, rejected) => {
//     let lucky = ""
//     let number = Math.ceil(2*Math.random())
//     if (number>1){
//       lucky = true
//       resolve("true")
  
//     }
//     else
//     {
//       lucky = false
//       rejected("false")

//     }
    
//   })
// }

// function cupon(lucky){
//   console.log("Zobaczmy czy mozesz dzisiaj wyslac kupon")
//   return new Promise((fullfiled, rejected) => {
//       if (lucky === "true") {
//         fullfiled("Smiało stary! dzisiaj dopisuje Ci szczescie")
//       }
//       else{
//         rejected("Kurczaki dzisiaj coś moze pojsc niezgodnie z planem")
//       }
//   })
// }


// luckGenerator().then((message) => {
//   return cupon(message)
//   .then((respons) => {
//     console.log(respons)
//   })  
// })
// .catch((err) => {
//   return cupon(err)
//   .catch((err) => {
//     console.log(err);
//   })
// })




// class Bird {
//   constructor(name, age, type){
//     this.nameBird = name
//     this.ageBird = age
//     this.typeBird = type
//   }
// }

// const BirdObj = new Bird("Riku", 14, "mnicha")
// console.log(BirdObj);


// class Pets extends Bird {
//   constructor(name, age, type){
//     super(nameBird:"Riku" , ageBird:14, typeBird:"mnicha")
//     this.name = name
//     this.age = age
//     this.type = type
//   }
// }

// const PetObj = new Pets("Amik", 6, "kundel")
// console.log(PetObj)


// function ConstrBird (name, age, type) {
// this.name = name;
// this.age = age;
// this.type = type;
// }

// const ConstrBirdObj = new ConstrBird("Kuki", 2, "mnicha")
// console.log(ConstrBirdObj)


// function EmployeeDev(name)
// {
//   this.name = name;
//   this.type = "Developer";
// }


// function EmployeeSec(name)
// {
//   this.name = name;
//   this.type = "Sec Spec"
// }

// function EmployeCreator()
// {
//       this.create = (name,type) =>{
//     switch(type)
//     {
//       case 1: 
//       {
//         return new EmployeeDev(name);
//         break;
//       }
//         case 2:
//         {
//           return new EmployeeSec(name)
//           break;
//         }
//     } 
//   }
// }

// const employeeCreator = new EmployeCreator()
// const employees = []

// employees.push(employeeCreator.create("Josh", 1))
// employees.push(employeeCreator.create("Nick", 1))
// employees.push(employeeCreator.create("Marie", 2))
// console.log(employees)


class Person
{
  constructor(name, age){
  this.name = name;
  this.age = age;
  }
   getName = () => {
    return this.name
  }

   getAge = () => {
    return this.age
  }
 
}


let Person1 = new Person("Nami", 15);
let Person2 = new Person("Annie", 12);
console.log(Person1.getName())
console.log(Person1.getAge())




