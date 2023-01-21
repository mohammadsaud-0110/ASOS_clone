const URLaccessories = `https://63cab8b14f53a00420296f33.mockapi.io/accessories`;
const URLshoe = `https://63ca4b894f53a00420202b84.mockapi.io/shoes`;
const URLjeans = `https://63cab8b14f53a00420296f33.mockapi.io/jeans`;
let productData = document.getElementById("product_data");
let allData = [];

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

function DOM(data) {
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
    //fev.style.borderRadius = "50%";
    fev.style.border = "0px";
    fev.style.backgroundColor = "white";

    let fevimg = document.createElement("img");
    fevimg.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/2951/2951141.png"
    );
    fevimg.style.width = "25px";
    fevimg.style.height = "25px";

    fev.addEventListener("click",()=>{
            //   let flag = true
            //   for(let i=0 ; i<fevData.length ; i++){
            //     if(ele.id == fevData[i].id){
            //       flag = false
            //       break
            //     }
            //    }
            //   if(flag === true){
            //     fevData.push(ele)

            //   }
     })

     let cart = document.createElement("button");
    //  cart.style.borderRadius = "40%";
     cart.style.border = "0px";
     cart.style.backgroundColor = "white";
 
     let cartimg = document.createElement("img");
     cartimg.setAttribute(
       "src",
       "https://cdn-icons-png.flaticon.com/512/9357/9357007.png"
     );
     cartimg.style.width = "25px";
     cartimg.style.height = "25px";



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
