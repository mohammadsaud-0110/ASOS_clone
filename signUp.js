//------------------- Register New User -------------------------//

let Gender = document.querySelectorAll(`input[name="gender"]`);
let gen = "";
let flag;
let forCheckData = []
let Join = document.getElementById("form");

// getting data from server...
function forCheck(){
        fetch("https://fashionista-server.onrender.com/Registered_Users", {
          method: "GET"
        }).then((res) => {
            return res.json();
          })
          .then((res) => {
            //console.log(res)
            forCheckData = res
          })
          .catch((err) => {
            console.log(err);
          });
}
forCheck()

// generation id...
function generateID() {
  return Math.floor(1000 + Math.random() * 9000);
}

// collect data from user...
Join.addEventListener("submit", (e) => {
  e.preventDefault();

  let id = generateID();
  let firstname = form.fist_name.value;
  let lastname = form.last_name.value;
  let email = form.email.value;
  let password = form.pass.value;
  let dateofbirth = form.date.value;
  for (let i of Gender) {
    if (i.checked) {
      gen = i.value;
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  let gender = gen;
  let regData = {id,firstname,lastname,gender,email,password,dateofbirth,};

    if (
        form.fist_name.value == "" ||
        form.last_name.value == "" ||
        flag == false ||
        form.email.value == "" ||
        form.pass.value == "" ||
        form.date.value == "" ||
        gender == ""
    ){
        alert("fill details...")
    }else if (regData.password.length < 10) {
        alert("pass less than 10 char...")
    }else {
        let flag1 = true
        for (let i = 0; i < forCheckData.length; i++) {
            if (regData.email === forCheckData[i].email) {
                flag1 = false;
            }
        }
        if (flag1 === false) {
                alert("already registered user...")
        } else {
            alert("success...")
            postData(regData);
        }
    }
});

// send data to server...
function postData(regData) {
  fetch("https://fashionista-server.onrender.com/Registered_Users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(regData),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

//------------------- Page Changing Data -------------------------//

let join = document.getElementById("join");
let joinData = document.querySelector(".joinData");

let sign = document.getElementById("sign");
let signinData = document.querySelector(".signinData");

signinData.style.display = "none";
sign.style.opacity = "50%";

sign.addEventListener("click",()=>{
    joinData.style.display = "none";
    signinData.style.display = "flex";
    sign.style.opacity = "100%";
    join.style.opacity = "50%";
});

join.addEventListener("click",()=>{
    signinData.style.display = "none";
    joinData.style.display = "";
    sign.style.opacity = "50%";
    join.style.opacity = "100%";
})

//------------------- Login User -------------------------//


























// --------------------------------------------------------------------------
// let lin = document.querySelector("#login");
// let reg = document.querySelector("#register");

// let linbtn = document.querySelector("#loginbtn");
// let regbtn = document.querySelector("#registerbtn");

// reg.style.display = "none";
// regbtn.style.opacity = "50%";

// linbtn.addEventListener("click",()=>{
//     reg.style.display = "none";
//     lin.style.display = "flex";
//     linbtn.style.opacity = "100%";
//     regbtn.style.opacity = "50%";
// });

// regbtn.addEventListener("click",()=>{
//     lin.style.display = "none";
//     reg.style.display = "flex";
//     linbtn.style.opacity = "50%";
//     regbtn.style.opacity = "100%";
// })




// let loginuser = localStorage.getItem("loggedinuser") || "";

// let allreg = JSON.parse(localStorage.getItem("allregistration")) || [];
// lin.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let email = document.querySelector("#lemail").value;
//     let password = document.querySelector("#lpass").value;
//     let flag = false;

//     for(let i=0;i<allreg.length;i++){
//         if(email==allreg[i].email && password==allreg[i].password){
//             flag=true;
//             loginuser = allreg[i].name;
//             localStorage.setItem("loggedinuser",loginuser);
//             break;
//         }
//     }
//     if(flag){
//         window.location.href = "./homepage.html"
//     }
//     else{
//         alert("Details Incorrect!");
//     }
// })

// reg.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let name = document.querySelector("#rname").value;
//     let email = document.querySelector("#remail").value;
//     let password = document.querySelector("#rpass").value;
//     let obj = {
//         name,
//         email,
//         password
//     }
//     console.log(name,email,password);
//     allreg.push(obj);
//     localStorage.setItem("allregistration",JSON.stringify(allreg));
//     reg.reset();
//     alert("Registration Successful, login now");
// })
