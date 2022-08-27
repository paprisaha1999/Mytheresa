let productData = [
  {
    brand: "BLUMARINE",
    name: "Crêpe blazer",
    price: "715",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/21/P00709348.jpg",
  },
  {
    brand: "SAINT LAURENT",
    name: "Puffer Small leather shoulder bag",
    price: "215",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/b2/P00709619.jpg",
  },
  {
    brand: "PARIS TEXAS",
    name: "Wanda suede knee-high boots",
    price: "575",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c1/P00706562.jpg",
  },
  {
    brand: "VALENTINO",
    name: "Crêpe couture miniskirt",
    price: "925",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6b/P00698544.jpg",
  },
  {
    brand: "LOEWE",
    name: "Paula's Ibiza crochet minidress",
    price: "425",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cb/P00705785.jpg",
  },
  {
    brand: "MAGDA BUTRYM",
    name: "Crystal-embellished square sunglasses",
    price: "635",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cf/P00705249.jpg",
  },
  {
    brand: "SAINT LAURENT",
    name: "High-rise leather drawstring pants",
    price: "209",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ca/P00725042.jpg",
  },
  {
    brand: "VERSACE",
    name: "La Greca wool-blend vest",
    price: "1639",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e3/P00699107.jpg",
  },
  {
    brand: "GABRIELA HEARST",
    name: "Lauren cashmere shawl",
    price: "2345",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9f/P00699836.jpg",
  },
  {
    brand: "CHLOÉ",
    name: "Cashmere and wool midi dress",
    price: "1895",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a3/P00695932_b1.jpg",
  },
  {
    brand: "CHLOÉ",
    name: "Meril woven platform sandals",
    price: "499",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/00/P00695572.jpg",
  },
  {
    brand: "LOEWE",
    name: "High-rise flared jeans",
    price: "585",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4c/P00709952.jpg",
  },
  {
    brand: "BOTTEGA VENETA",
    name: "High-rise flared jeans",
    price: "745",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/95/P00702101.jpg",
  },
  {
    brand: "CELINE EYEWEAR",
    name: "High-rise flared jeans",
    price: "245",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/41/P00679994.jpg",
  },
  {
    brand: "KHAITE",
    name: "High-rise flared jeans",
    price: "1455",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00689008.jpg",
  },
  {
    brand: "KHAITE",
    name: "High-rise flared jeans",
    price: "985",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6b/P00676349.jpg",
  },
  {
    brand: "ALAÏA",
    name: "High-rise flared jeans",
    price: "749",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/da/P00709349.jpg",
  },
  {
    brand: "JACQUEMUS",
    name: "High-rise flared jeans",
    price: "549",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/24/P00708426.jpg",
  },
  {
    brand: "BLUMARINE",
    name: "High-rise flared jeans",
    price: "825",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c4/P00710545.jpg",
  },
  {
    brand: "DOLCE&GABBANA",
    name: "High-rise flared jeans",
    price: "1179",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/08/P00704689.jpg",
  },
  {
    brand: "ALEXANDER MCQUEEN",
    name: "Double leather belt",
    price: "775",
    img: "	https://img.mytheresa.com/560/560/33/jpeg/catalog/product/18/P00697925.jpg",
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