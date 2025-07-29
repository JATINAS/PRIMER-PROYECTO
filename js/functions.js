//---------- ADD IN THE CART
const addIcon = document.querySelectorAll(".add");
const cartProd = document.querySelector(".cart_products");
const numCount = document.querySelector(".cartCounter");
const updateCartCount = (number = "") => {
            numCount.innerHTML = number;
        }


addIcon.forEach(elem => {
    elem.addEventListener("click", () => {

        

        const purchaseDiv = document.createElement("div");                      //CREATE NEW DIV ELEMENT
        purchaseDiv.classList.add("cart_article");

        const productParent = elem.parentElement;                               //GET THE PARENT OF OUR ADD BUTTON (PRODUCT)
        const productImg = productParent.getElementsByTagName("img");           //GET ELEMENT IMG
        const elemImg = productImg[0].cloneNode(true);                          //COPY IMG ELEMENT
        purchaseDiv.append(elemImg);                                            //ADD IMG TO NEW DIV IN CART

        const productAlt = productImg[0].getAttribute("alt");                   //GET AN ALT ATTIBUTTE OF IMG ELEMENT
        const pElem = document.createElement("p");                              //CREATE AN P ELEMENT
        pElem.append(productAlt);                                               //ADD ALT TEXT TO NEW P ELEMENT
        purchaseDiv.append(pElem);                                              //ADD TO NEW DIV IN CART

        const productP = productParent.querySelector("p");                      //GET THE PRICE IN P ELEMENT
        const pElem2 = productP.cloneNode(true);                                //MAKE A COPY OF P ELEMENT
        purchaseDiv.append(pElem2);                                             //ADD TO NEW DIV IN CART


        const productRem = document.createElement("img");                       //CREATE IMG NEW ELEMENT
        productRem.setAttribute("src", "img/delete.avif");                      //SET ATTRIBUTE SRC
        productRem.setAttribute("alt", "Icono Quitar");                         //SET ATTRIBUTE ALT
        productRem.classList.add("remove");                                     //ADD CLASS REMOVE
        purchaseDiv.append(productRem);                                         //ADD TO NEW DIV IN CART


        const elemcart = document.querySelector(".cart_products");              //select element class 
        elemcart.appendChild(purchaseDiv);                                      //ADD NEW DIV TO THE CART


        

        //-----------THIS IF EVALUATE THAT COUNT IS HIGHER TO ZERO AND EVALUATES IF CLASS hidden IS SETTING
        if (cartProd.children.length > 0 && numCount.classList.contains("hidden") == true) {
            numCount.classList.toggle("hidden");
        }


        //---------- REMOVE ICON
        const iconRemove = document.querySelectorAll(".remove");

        iconRemove.forEach(elem => {
            elem.addEventListener("click", () => {
                const elemParent = elem.parentElement;
                elemParent.remove();
                updateCartCount(cartProd.children.length);           //UPDATE THE BADGE COUNT WHEN REMOVE ELEMENTS OF THE CART
                
                //---------- THIS IF EVALUATES THAT COUNT IS EQUAL TO ZERO AND REMOVES ATTRIBUTES OF BADGE
                if (cartProd.children.length === 0) {
                    numCount.classList.toggle("hidden");
                }
            });
        });

        updateCartCount(cartProd.children.length);                  // UPDATE THE COUNT WHEN ADD ELEMENTS IN THE CART
    });
});


//---------- BUY BUTTON
const buyBut = document.querySelector(".buyButton");
buyBut.addEventListener("click", () => {
    if (cartProd.children.length === 0) {
        alert("Please, add some items in the cart.");
    }
    else {
        alert("Thanks for your buying.");
        updateCartCount();
        while (cartProd.hasChildNodes()) {
            cartProd.removeChild(cartProd.firstChild);
        }
    }
});



//---------- CART ICON
const header = document.querySelector(".header");
//console.log(document.querySelector(".header"));
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

//----------- MENU ICON
const headerMenu = document.querySelector(".header");
const menuIcon = header.firstElementChild;
//console.log(menuIcon);
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("showL");
})

//-------- X ICON IN MENU
const xIcon = document.querySelector(".x_icon");
//console.log(xIcon);
xIcon.addEventListener("mouseenter", () => {
    xIcon.style.opacity = "1";
});
xIcon.addEventListener("mouseleave", () => {
    xIcon.style.opacity = "0.5";
});

xIcon.addEventListener("click", () => {
    menu.classList.toggle("showL");
})

//---------- HGIHLIGHT PRODUCTS
const product = document.querySelectorAll(".products__art");
const addButton = document.querySelectorAll(".add");

product.forEach(photo => {
    photo.addEventListener("mouseenter", () => { 
        photo.style.opacity = "0.5";                            //INVENSION MIA
        addButton.style.opacity = "1";
    })
})

product.forEach(photo => {
    photo.addEventListener("mouseleave", () => {
        photo.style.opacity = "1";
    })
})
