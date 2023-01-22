const URLaccessories = `https://63cab8b14f53a00420296f33.mockapi.io/accessories`;
const URLshoe = `https://63ca4b894f53a00420202b84.mockapi.io/shoes`;
const URLjeans = `https://63cab8b14f53a00420296f33.mockapi.io/jeans`;
const URLallusers = "https://63ca4b894f53a00420202b84.mockapi.io/allusers";
let productData = document.getElementById("product_data");
let allData = [];
let cart = [];
let fav = [];
let loggedinuserid = localStorage.getItem("loggedinuseid");          //---to store id of user who is logged in currently-----------

fetchCart();
fetchFav();

function fetchCart(){                               //-----to fetch all cart items of the user---------
  fetch(`${URLallusers}/${loggedinuserid}`)
  .then((res)=>  { return res.json(); } )
  .then((data)=>{ cart=data.cart; fav=data.fav; console.log(cart) });
}
function fetchFav(){                               //-----to fetch all Favorite items of the user---------
  fetch(`${URLallusers}/${loggedinuserid}`)
  .then((res)=>  { return res.json(); } )
  .then((data)=>{ fav=data.fav; console.log(fav) });
}




fetch(URLshoe)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    for (let i = 0; i < 10; i++) {
      allData.push(res[i]);
    }
    fetchJ();
  })
  .catch((err) => {
    console.log(err);
  });
function fetchJ() {
  fetch(URLjeans)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < 10; i++) {
        allData.push(res[i]);
      }
      fetchA();
    })
    .catch((err) => {
      console.log(err);
    });
}
function fetchA() {
  fetch(URLaccessories)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < 10; i++) {
        allData.push(res[i]);
      }
      allData.sort((a, b) => {
        return a.id - b.id;
      });
      DOM(allData);
    })
    .catch((err) => {
      console.log(err);
    });
}

function DOM(data) {               //------------display card -------------
  productData.innerHTML = null;
  data.forEach((ele) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", `https://${ele.image}`);
    let name = document.createElement("p");
    name.textContent = ele.name;
    let flexDiv = document.createElement("div");
    flexDiv.style.display = "flex";
    flexDiv.style.justifyContent = "space-between"
    let price = document.createElement("h3");
    price.textContent = `$ ${ele.price}`;
    let fev = document.createElement("button");
    fev.style.border = "0px";
    fev.style.backgroundColor = "white";

    let fevimg = document.createElement("img");
    fevimg.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/2951/2951141.png"
    );
    fevimg.style.width = "25px";
    fevimg.style.height = "25px";

    fevimg.addEventListener("click",()=>{
        addtoFav(ele);
     })

     let cart = document.createElement("button");
     cart.style.border = "0px";
     cart.style.backgroundColor = "white";
      
     let cartimg = document.createElement("img");
     cartimg.setAttribute(
       "src",
       "https://cdn-icons-png.flaticon.com/512/9357/9357007.png"
     );
     cartimg.style.width = "25px";
     cartimg.style.height = "25px";
     cartimg.addEventListener("click",()=>{
        addtoCart(ele);
      })

    cart.append(cartimg)
    fev.append(fevimg);
    flexDiv.append(price, cart, fev);
    card.append(image, name, flexDiv);
    productData.append(card);
  });
}

// function filterDom(){
//     // console.log(sss)
//     filter.addEventListener("change",()=>{
//       let felt = filterArr.filter((ele)=>{
//         if(filter.value===ele.type){
//           return true
//         }else{
//           return false
//         }
//       })
//       DOM(felt)
//     })
//   }
//   filterDom()



function addtoCart(ele){
  let flag = false;
  if(cart.length!==0){
    cart.forEach((e)=>{
      if(ele.name == e.item.name){
        flag = true;
      }
    })
  }
  // console.log(cart);
  if(flag){
    alert("Item already present in the Cart..!");
  }
  else{
    // console.log(ele.name)
    let nobj = {};
    nobj.quantity = 1;
    nobj.item = ele;
    console.log(nobj);
    cart.push(nobj);
    console.log(cart)
    findUser(cart);
  }
}
function addtoFav(ele){
  let flag = false;
  if(fav.length!==0){
    fav.forEach((e)=>{
      if(ele.name == e.name){
        flag = true;
      }
    })
  }

  if(flag){
    alert("Item already present in Favorites..!");
  }
  else{
    fav.push(ele);
    console.log(fav)
    findUserFav(fav);
  }
}

function findUser(cart){
  fetch(`${URLallusers}/${loggedinuserid}`)
  .then((res)=>  { return res.json(); } )
  .then((userdata)=>{ postToCart(userdata, cart) });
}

function findUserFav(fav){
  fetch(`${URLallusers}/${loggedinuserid}`)
  .then((res)=>  { return res.json(); } )
  .then((userdata)=>{ postToFav(userdata, fav) });
}

function postToCart(userdata, cartData){                     //-----to PUT cart item data to api----
  let obj = {
    "first-name": `${userdata["first-name"]}`,
    "last-name": `${userdata["last-name"]}`,
    "email": `${userdata["email"]}`,
    "password": `${userdata["password"]}`,
    "gender": `${userdata["gender"]}`,
    "d-o-b": `${userdata["d-o-b"]}`,
    "id": `${userdata["id"]}`,
    "cart": cartData,
    "history": userdata.history,
    "fav": userdata.fav
    };

    fetch(`${URLallusers}/${loggedinuserid}`,{
      method: 'PUT',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res)=>{ return res.json(); })
      .then((data)=>{ 
        alert("Product Added to Cart");
        fetchCart();
       })
}

function postToFav(userdata, favData){                     //-----to PUT favorite item data to api----
  let obj = {
    "first-name": `${userdata["first-name"]}`,
    "last-name": `${userdata["last-name"]}`,
    "email": `${userdata["email"]}`,
    "password": `${userdata["password"]}`,
    "gender": `${userdata["gender"]}`,
    "d-o-b": `${userdata["d-o-b"]}`,
    "id": `${userdata["id"]}`,
    "cart": userdata.cart,
    "history": userdata.history,
    "fav": favData
    };

    fetch(`${URLallusers}/${loggedinuserid}`,{
      method: 'PUT',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res)=>{ return res.json(); })
      .then((data)=>{ 
        alert("Product Added to Favorite");
        fetchFav();
       })
}