let btn = document.querySelector("button");
let p =document.querySelector("p");

btn.addEventListener("click" , async () => {    // using async here becoz it should print result only after the callBack is resolved
    
    let fact = await getFacts();                 // using await to wait till getFacts() return result
    p.innerText = fact;
    console.log(fact);
    
}) 


let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
         let res = await axios.get(url);
         return res.data.fact;
    }
   catch(err){
    console.log("ERROR - ", err);
    console.log("NO FACT FOUND.");
   }
}
getFacts();