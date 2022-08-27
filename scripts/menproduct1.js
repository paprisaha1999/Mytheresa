let productData = [
  {
    brand: "MARNI",
    name: "Wool Blend Tweet Blazer",
    price: "1505",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3a/P00662908.jpg",
  },
  {
    brand: "ACNE STUDIOS",
    name: "Check Wool Blend Scarf",
    price: "205",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00707447.jpg",
  },
  {
    brand: "GUCCI",
    name: "Web stripe satin down jacket",
    price: "1255",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/77/P00674224.jpg",
  },
  {
    brand: "MARNI",
    name: "Checked wool and mohair sweater",
    price: "825",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/78/P00662913.jpg",
  },
  {
    brand: "LANVIN",
    name: "Mid-rise tapered jeans",
    price: "425",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/63/P00662843.jpg",
  },
  {
    brand: "GUCCI",
    name: "Horsebit leather slippers",
    price: "635",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f1/P00674030.jpg",
  },
  {
    brand: "BURBERRY",
    name: "Caxton checked short-sleeved shirt",
    price: "315",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3f/P00481011.jpg",
  },
  {
    brand: "VERCASE",
    name: "La Greca cashmere sweater",
    price: "845",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b6/P00680509.jpg",
  },
  {
    brand: "VERCASE",
    name: "Medusa Chain leather loafers",
    price: "665",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bf/P00680505.jpg",
  },
  {
    brand: "ALEXANDER MCQUEEN",
    name: "Brad Pitt cotton shirt",
    price: "499",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/89/P00478859.jpg",
  },
  {
    brand: "MARNI",
    name: "Leather Jacket",
    price: "585",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/01/P00662880.jpg",
  },
  {
    brand: "LANVIN",
    name: "JL3D jacquard wool sweater",
    price: "745",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4f/P00662808.jpg",
  },
  {
    brand: "ACNE STUDIOS",
    name: "Straight cotton-blend chinos",
    price: "245",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fd/P00707269.jpg",
  },
  {
    brand: "LEMAIRE",
    name: "Suede cowboy boots",
    price: "649",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a6/P00691539.jpg",
  },
  {
    brand: "GUCCI",
    name: "GG perforated wool cardigan",
    price: "889",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4b/P00674231.jpg",
  },
  {
    brand: "VALENTINO",
    name: "Printed silk bowling shirt",
    price: "749",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/63/P00675824.jpg",
  },
  {
    brand: "BARENA VENEZIA",
    name: "Straight corduroy pants",
    price: "549",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a6/P00662626.jpg",
  },
  {
    brand: "BRUNELLO CUCINELLI",
    name: "Prince of Wales check wool and cashmere suit",
    price: "1825",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2e/P00681094.jpg",
  },
  {
    brand: "VALENTINO GARAVANI",
    name: "VLogo Chain leather loafers",
    price: "635",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/eb/P00675848.jpg",
  },
  {
    brand: "JIL SANDER",
    name: "Alpaca wool-blend cardigan",
    price: "775",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/76/P00683272.jpg",
  },
  {
    brand: "LANVIN",
    name: "Bumpr suede-paneled sneakers",
    price: "379",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/09/P00693219_d2.jpg",
  },
]

function displayData(productData) {
  document.getElementById("products").innerHTML = "";

  productData.forEach(function (elem) {

    let box = document.createElement("div");

    let productImg = document.createElement("img");
    productImg.setAttribute("src", elem.img);

    let brandName = document.createElement("h4");
    brandName.innerText = elem.brand;

    let productName = document.createElement("p");
    productName.innerText = elem.name;

    let productPrice = document.createElement("h4");
    productPrice.innerText = "€ " + elem.price;

    let productCart = document.createElement("button");
    productCart.innerText = "Add to Cart";
    productCart.addEventListener("click", function () {
      addItems(elem);
    })


    box.append(productImg, brandName, productName, productPrice, productCart);
    document.getElementById("products").append(box);

  })
}
displayData(productData)

let cartLS = JSON.parse(localStorage.getItem("cartPage")) || [];
document.getElementById("count1").innerText = cartLS.length;

function addItems(elem) {
  cartLS.push(elem);
  document.getElementById("count1").innerText = cartLS.length;
  localStorage.setItem("cartPage", JSON.stringify(cartLS));
  alert("Item added to cart successfully!")
}
document.getElementById("count1").innerText = cartLS.length;
