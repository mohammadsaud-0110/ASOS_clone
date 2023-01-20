// let baseURL = "https://63ca4b894f53a00420202b84.mockapi.io/shoes";
let box = document.querySelector(".box");

let shoebtn = document.querySelector("#showShoes")
let jeansbtn = document.querySelector("#showJeans")
let accessoriesbtn = document.querySelector("#showAccessories")

shoebtn.addEventListener("click",()=>{
    fetchShoes("shoes");
})

jeansbtn.addEventListener("click",()=>{
    fetchJeans("jeans");
})

accessoriesbtn.addEventListener("click",()=>{
    fetchAccessories("accessories");
})


function fetchShoes(str){
    fetch(`https://63ca4b894f53a00420202b84.mockapi.io/shoes`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        console.log(data);
        displayTable(data,str);
     })
     .catch((err)=>{ console.log(err,"Error") });
}

function fetchJeans(str){
    fetch(`https://63cab8b14f53a00420296f33.mockapi.io/jeans`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        displayTable(data,str);
     })
     .catch((err)=>{ console.log(err,"Error") });
}

function fetchAccessories(str){
     fetch(`https://63cab8b14f53a00420296f33.mockapi.io/accessories`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        displayTable(data,str);
     })
     .catch((err)=>{ console.log(err,"Error") });
}



function displayTable(data,str){
    // document.querySelector("table").style.display = "default";
    document.querySelector("table>tbody").innerHTML = null;
    data.forEach((ele,index)=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = ele.id;
        let td2 = document.createElement("td");
        td2.textContent = ele.name;
        let td3 = document.createElement("td");
        td3.textContent = ele.brand;
        let td4 = document.createElement("td");
        td4.textContent = ele.price;
        let td5 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src",`https://${ele.image}`);
        td5.append(img);
        let td6 = document.createElement("td");
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete Product";
        deletebtn.addEventListener("click",()=>{
            deleteProduct(ele,str);
        })
        td6.append(deletebtn);
        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("table>tbody").append(row);
    })
    document.querySelector(".count-heading").style.display = "block";
    document.querySelector(".count-heading>span").textContent = `${data.length}`;
}


function deleteProduct(ele,str){
    let link = "";
    if(str=="shoes"){
        link = "https://63ca4b894f53a00420202b84.mockapi.io/shoes/";
    }
    if(str=="jeans"){
        link = "https://63cab8b14f53a00420296f33.mockapi.io/jeans";
    }
    if(str=="accessories"){
        link = "https://63cab8b14f53a00420296f33.mockapi.io/accessories";
    }
    fetch(`${link}/${ele.id}` ,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
        },
        body: null
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            alert(err)
        })

        if(str=="shoes"){
            setTimeout(()=>{ fetchShoes() },2000)
        }
        if(str=="jeans"){
            setTimeout(()=>{ fetchJeans() },2000)
        }
        if(str=="accessories"){
            setTimeout(()=>{ fetchAccessories() },2000)
        }
        
}