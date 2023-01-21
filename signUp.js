//------------------- Register New User -------------------------//

let Gender = document.querySelectorAll(`input[name="gender"]`);
let gen = "";
let flag;
let forCheckData = [];
let Join = document.getElementById("form");

// getting data from server...
function forCheck() {
  fetch("https://63ca4b894f53a00420202b84.mockapi.io/allusers", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res);
      forCheckData = res;
    })
    .catch((err) => {
      console.log(err);
    });
}
forCheck();

// collect data from user...
Join.addEventListener("submit", (e) => {
  e.preventDefault();
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
  let regData = {
    "first-name": `${firstname}`,
    "last-name": `${lastname}`,
    "email": `${email}`,
    "password": `${password}`,
    "gender": `${gender}`,
    "d-o-b": `${dateofbirth}`,
    "cart": [],
    "history": [],
    "fav": []
  };

  if (regData.password.length < 10) {
    swal(
      "Check Password",
      "make sure password is more than 10 characters...!",
      "warning"
    );
  } else {
    let flag1 = true;
    for (let i = 0; i < forCheckData.length; i++) {
      if (regData.email === forCheckData[i].email) {
        flag1 = false;
      }
    }
    if (flag1 === false) {
      swal(
        "Account Has Allready Registred",
        "go to sign in page...!",
        "warning"
      );
    } else {
      swal("Join Successfull...!", "go to sign in page...!", "success");
      postData(regData);
      form.reset();
    }
  }

});

// send data to server...
function postData(regData) {
  fetch("https://63ca4b894f53a00420202b84.mockapi.io/allusers", {
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

sign.addEventListener("click", () => {
  joinData.style.display = "none";
  signinData.style.display = "";
  sign.style.opacity = "100%";
  join.style.opacity = "50%";
});

join.addEventListener("click", () => {
  signinData.style.display = "none";
  joinData.style.display = "";
  sign.style.opacity = "50%";
  join.style.opacity = "100%";
});

//------------------- Login User -------------------------//

let SignIn = document.getElementById("form2");
let loginUser = localStorage.getItem("loggedinuser") || ""
let loginUserId = localStorage.getItem("loggedinuserid") || ""
SignIn.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = form2.logmail.value;
  let password = form2.logpass.value;
  //console.log(email,password)
  let flag3 = false;

  for (let i = 0; i < forCheckData.length; i++) {
    if (email === forCheckData[i].email && password === forCheckData[i].password) {
      flag3 = true
      loginUser = forCheckData[i]["first-name"] + " " + forCheckData[i]["last-name"]
      loginUserId = forCheckData[i]["id"]
      localStorage.setItem("loggedinuser",loginUser)
      localStorage.setItem("loggedinuseid",loginUserId)
    }
  }

  if(flag3 === true){
    swal("SigIn Successfull...!", "", "success");
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  }else{
    swal("Wrong Credential", "please put right credential...!", "warning");
  }
});






