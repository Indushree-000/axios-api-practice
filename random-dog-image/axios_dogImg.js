let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click" , async() => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("img");
    img.setAttribute("src" , link);

})


let url = "https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(err){
        console.log("ERROR - ", err);
        console.log("NO IMAGE FOUND");
    }
    
}
