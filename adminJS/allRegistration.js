let url = "https://63ca4b894f53a00420202b84.mockapi.io/allusers";

let allusers = [];

fetchUser();

async function fetchUser(){
    await fetch(url)
    .then((res)=>{ return res.json(); })
    .then((data)=>{ console.log(data);
        allusers = data;
        display(data);
    })
}


function display(data){
    document.querySelector("table>tbody").innerHTML = null;
    data.forEach((ele,index)=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = ele.id;
        let td2 = document.createElement("td");
        td2.textContent = ele["first-name"];
        let td3 = document.createElement("td");
        td3.textContent = ele["last-name"];
        let td4 = document.createElement("td");
        td4.textContent = ele.email;
        let td5 = document.createElement("td");
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete Product";
        deletebtn.addEventListener("click",()=>{
            deleteUser(ele);
        })
        td5.append(deletebtn);
        row.append(td1,td2,td3,td4,td5);
        document.querySelector("table>tbody").append(row);
    })
    document.querySelector(".count-heading").style.display = "block";
    document.querySelector(".count-heading>span").textContent = `${data.length}`;
}




function deleteUser(ele){
    fetch(`${url}/${ele.id}` ,{
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

        setTimeout(()=>{ fetchUser() },1000)
}