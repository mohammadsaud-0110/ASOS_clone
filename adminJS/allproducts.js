let baseURL = "https://fashionista-server.onrender.com";
let box = document.querySelector(".box");

let shoebtn = document.querySelector("#showShoes")
let jeansbtn = document.querySelector("#showJeans")
let accessoriesbtn = document.querySelector("#showAccessories")

shoebtn.addEventListener("click",()=>{
    fetchShoes();
})

jeansbtn.addEventListener("click",()=>{
    fetchJeans();
})

accessoriesbtn.addEventListener("click",()=>{
    fetchAccessories();
})


function fetchShoes(){
    fetch(`${baseURL}/shoe`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        console.log(data);
        displayTable(data);
     })
     .catch((err)=>{ console.log(err,"Error") });
}

function fetchJeans(){
    fetch(`${baseURL}/jeans`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        displayTable(data);
     })
     .catch((err)=>{ console.log(err,"Error") });
}

function fetchAccessories(){
     fetch(`${baseURL}/accessories`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        displayTable(data);
     })
     .catch((err)=>{ console.log(err,"Error") });
}



function displayTable(data){
    // document.querySelector("table").style.display = "default";
    document.querySelector("table>tbody").innerHTML = null;
    data.forEach((ele,index)=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = ele.id;
        let td2 = document.createElement("td");
        td2.textContent = ele.name;
        let td3 = document.createElement("td");
        td3.textContent = ele.brandName;
        let td4 = document.createElement("td");
        td4.textContent = ele.price.current.text;
        let td5 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src",`https://${ele.imageUrl}`);
        td5.append(img);
        let td6 = document.createElement("td");
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete Product";
        td6.append(deletebtn);
        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("table>tbody").append(row);
    })
    document.querySelector(".count-heading").style.display = "block";
    document.querySelector(".count-heading>span").textContent = `${data.length}`;
}