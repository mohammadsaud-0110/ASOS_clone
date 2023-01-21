let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let category = form.category.value;
    addProduct(category);
})


async function addProduct(category){
    let link = "";
    if(category=="shoes"){
        link = "https://63ca4b894f53a00420202b84.mockapi.io/shoes";
    }
    if(category=="jeans"){
        link = "https://63cab8b14f53a00420296f33.mockapi.io/jeans";
    }
    if(category=="accessories"){
        link = "https://63cab8b14f53a00420296f33.mockapi.io/accessories";
    }
    let obj = {
        "name": form.name.value,
        "brand": form.brand.value,
        "price": +(form.price.value),
        "color": form.color.value,
        "image": (form.image.value).slice(8)
    }
    console.log(obj);
    await fetch(`${link}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        alert("New Product Added")
        window.location.reload();
    }).catch((err)=>{
        alert(err)
    })
}

