const Url="https://63c793e3e52516043f4040ed.mockapi.io/users/29";

var cartContainer=document.getElementById("cartContainer");
var checkDiv=document.getElementById("checkDiv");
var remove=document.getElementById("remove");
var price=document.getElementById("price");
var emi=document.getElementById("emi");

var cartData=[];
var userData={};

fetch(Url)
.then((res)=>res.json())
.then((data)=>{
    // var index=1;
    data.cart.map((element,index)=>{
        element.id=index+1;
        element.totalPrice=element.price*element.itemCount;
        element.totalEmiPrice=element.emi*element.itemCount;
        return element;
    });
    userData=data;
    // console.log(data.cart);
    display(data.cart);
    cartData=data.cart;
})



    function removeItem(item){
        console.log("OK");
        console.log(item.id);
        cartData=cartData.filter((element)=>element.id!=item.id);
        display(cartData);
        console.log(cartData);
        userData.cart=cartData;
        update(userData);
    }

    async function update(userdata){
        let res=await fetch(Url,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
    
        let d=await res.json();
    }

    function getItemCount(select){
        console.log("OK");
        var id=select.dataset.id;
        var value=+document.getElementById(`itemCount${id}`).value;
        var userDt=userData.cart;
        var changed=userDt.map((element)=>{
            if(element.id==id)
            {
                element.itemCount=value;
                element.totalPrice=value*element.price;
                element.totalEmiPrice=value*element.emi;
                return element;
            }
            else
            return element;
        });
        display(changed);
        userData.cart=changed;
        update(userData);
    }

    var Qlogo=document.getElementById("Qlogo");
    var closelogo=document.getElementById("closelogo");
    var qnaDiv=document.getElementById("qnaDiv");

    Qlogo.addEventListener("click",(e)=>{
        e.preventDefault();
        Qlogo.style.display="none";
        closelogo.style.display="block";

        qnaDiv.innerHTML=`
        <hr id="qnahr">
        <div id="qline">
            <p>Can I place a business order or add a business GST number to my invoice?</p>
            <img id="downIcon1" src="logo.png/down.png" alt="icon">
            <img id="upIcon1" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans1"></p>

        <hr id="qnahr">
        <div id="qline">
            <p>When will I get my items?</p>
            <img id="downIcon2" src="logo.png/down.png" alt="icon">
            <img id="upIcon2" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans2"></p>

        <hr id="qnahr">
        <div id="qline">
            <p>What are my payment options?</p>
            <img id="downIcon3" src="logo.png/down.png" alt="icon">
            <img id="upIcon3" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans3"></p>

        <hr id="qnahr">
        <div id="qline">
            <p>What are my financing options?</p>
            <img id="downIcon4" src="logo.png/down.png" alt="icon">
            <img id="upIcon4" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans4"></p>

        <hr id="qnahr">
        <div id="qline">
            <p>Does Apple offer an education discount?</p>
            <img id="downIcon5" src="logo.png/down.png" alt="icon">
            <img id="upIcon5" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans5"></p>

        <hr id="qnahr">
        <div id="qline">
            <p>Can I shop for Family & Friends in other countries or regions?</p>
            <img id="downIcon6" src="logo.png/down.png" alt="icon">
            <img id="upIcon6" src="logo.png/up.png" alt="icon">
        </div>
        <p id="ans6"></p>
        `;

        var downIcon1=document.getElementById("downIcon1");
        var upIcon1=document.getElementById("upIcon1");
        var ans1=document.getElementById("ans1");

        downIcon1.addEventListener("click",()=>{
            downIcon1.style.display="none";
            ans1.innerText="No, only consumer orders can be placed at this time. You will receive a consumer invoice via email after delivery of your order. It is not possible to add a business GST number to your invoice and Customer Service cannot edit invoices to include it.";
            upIcon1.style.display="block";
        });

        upIcon1.addEventListener("click",()=>{
            upIcon1.style.display="none";
            ans1.innerText="";
            downIcon1.style.display="block";

        });

        var downIcon2=document.getElementById("downIcon2");
        var upIcon2=document.getElementById("upIcon2");
        var ans2=document.getElementById("ans2");

        downIcon2.addEventListener("click",()=>{
            downIcon2.style.display="none";
            ans2.innerText="By entering a PIN code, you’ll get estimated delivery dates for your items. You’ll get a final delivery date after you’ve placed your order. All estimates are based on item availability and the delivery option you choose.";
            upIcon2.style.display="block";
        });

        upIcon2.addEventListener("click",()=>{
            upIcon2.style.display="none";
            ans2.innerText="";
            downIcon2.style.display="block";

        });

        var downIcon3=document.getElementById("downIcon3");
        var upIcon3=document.getElementById("upIcon3");
        var ans3=document.getElementById("ans3");

        downIcon3.addEventListener("click",()=>{
            downIcon3.style.display="none";
            ans3.innerText="We accept most credit and debit cards, as well as credit card and debit EMI. We also accept Net Banking, UPI and Payment on Delivery. Some payment options may not be available for all products. You can call 000800 040 1966 for more information.";
            upIcon3.style.display="block";
        });

        upIcon3.addEventListener("click",()=>{
            upIcon3.style.display="none";
            ans3.innerText="";
            downIcon3.style.display="block";

        });

        var downIcon4=document.getElementById("downIcon4");
        var upIcon4=document.getElementById("upIcon4");
        var ans4=document.getElementById("ans4");

        downIcon4.addEventListener("click",()=>{
            downIcon4.style.display="none";
            ans4.innerText="You can pay in instalments* using any credit card or debit account with EMI. During Checkout, you can compare and select instalment options. *Subject to card eligibility. See terms.";
            upIcon4.style.display="block";
        });

        upIcon4.addEventListener("click",()=>{
            upIcon4.style.display="none";
            ans4.innerText="";
            downIcon4.style.display="block";

        });

        var downIcon5=document.getElementById("downIcon5");
        var upIcon5=document.getElementById("upIcon5");
        var ans5=document.getElementById("ans5");

        downIcon5.addEventListener("click",()=>{
            downIcon5.style.display="none";
            ans5.innerText="Yes. Apple offers special pricing for students, teachers, administrators and staff members. If you think you qualify, visit the Apple Education Store(opens in a new window) to place your order.";
            upIcon5.style.display="block";
        });

        upIcon5.addEventListener("click",()=>{
            upIcon5.style.display="none";
            ans5.innerText="";
            downIcon5.style.display="block";

        });

        var downIcon6=document.getElementById("downIcon6");
        var upIcon6=document.getElementById("upIcon6");
        var ans6=document.getElementById("ans6");

        downIcon6.addEventListener("click",()=>{
            downIcon6.style.display="none";
            ans6.innerText="Visit the online store of the country or region where the products will be delivered to place your order. You can call 000800 040 1966 for more information.";
            upIcon6.style.display="block";
        });

        upIcon6.addEventListener("click",()=>{
            upIcon6.style.display="none";
            ans6.innerText="";
            downIcon6.style.display="block";

        });
    });

    closelogo.addEventListener("click",(e)=>{
        e.preventDefault();
        closelogo.style.display="none";
        Qlogo.style.display="block";

        qnaDiv.innerHTML=null;
    });

function display(cart){
    console.log(cart);

    var totalcartprice=0;
    var totalemiprice=0;

    if(cart.length!=0)
    {
        cartContainer.innerHTML=`${cart.map((element)=>{
            totalcartprice+=element.totalPrice;
            totalemiprice+=element.totalEmiPrice;
            return render(element);
        }).join("")}`+
        `<hr id="hr1">
        <div id="cartContainerEnd">
            <div id="cartContainerEndEmptyDiv"></div>
            <div id="cartContainerEndDiv">
                <div>
                    <p>Subtotal</p>
                    <p>₹${totalcartprice}.00</p>
                </div>
                <div>
                    <p>Shipping</p>
                    <p>FREE</p>
                </div>
                <hr id="hr2">
                <div>
                    <h3>Total</h3>
                    <h3>₹${totalcartprice}.00</h3>
                </div>
                <div>
                    <p>Monthly payment</p>
                    <p>₹${totalemiprice}.00/mo.per month with EMI</p>
                </div>
            </div>
        </div>
        <div id="lastcheckoutButton">
            <button>Continue to Shipping Address</button>
        </div>`;

        price.innerText=totalcartprice;
        emi.innerText=totalemiprice;

    }
    else
    {
        cartContainer.innerHTML=null;
    checkDiv.innerHTML=`
            <h1 id="checkDivEmptyProductH1">Your bag is empty.</h1>
            <p id="checkDivEmptyProductP">Sign in to see if you have any saved items. Or continue shopping.</p>
            <div id="checkDivEmptyProductButtons">
                <button>Sign In</button>
                <button>Continue Shopping</button>
            </div>
    `;
    }
}

function render(product){
    return `
    <hr id="hr1">
<div id="product">
    <img src="${product.image}" alt="image">
<div id="productOuterDiv">
    <div id="productDiv">
        <div id="title">
            <h3>${product.title}</h3>
        </div>
        <select class="itemCount" data-id="${product.id}" id="itemCount${product.id}" onchange="getItemCount(this)">
            <option value="">${product.itemCount}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <p>₹${product.totalPrice}.00</p>
        
    </div>
    <div id="emiDiv">
                <p>Pay 16% pa for 6 months:</p>
                <p>₹${product.totalEmiPrice}.00/mo.</p>
            </div>
    <div id="priceremove">
            
            <p id="${product.id}" onclick="removeItem(this)">Remove</p>
        </div>
</div>
</div>
    `;

}