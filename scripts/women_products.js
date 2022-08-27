let productData = [
    {
      brand: "ALESSANDRA RICH",
      name: "Embellished mesh midi dress",
      price: "1305",
      img: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/cd/P00694770.jpg",
    },
    {
      brand: "VALENTINO",
      name: "VLogo Signature Swarovski crystal",
      price: "295",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/85/P00705691.jpg",
    },
    {
      brand: "MAGDA BUTRYM",
      name: "Leather and satin sandals",
      price: "795",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1e/P00705664.jpg",
    },
    {
      brand: "VALENTINO GARAVANI",
      name: "Rockstud Spike Mini leather shoulder bag",
      price: "1265",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/76/P00696787.jpg",
    },
    {
      brand: "SAINT LAURENT",
      name: "Le 57 quilted leather shoulder bag",
      price: "1765",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2a/P00733275.jpg",
    },
    {
      brand: "SAINT LAURENT",
      name: "High-rise leather drawstring pants",
      price: "2009",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/be/P00711138.jpg",
    },
    {
      brand: "CHLOÉ",
      name: "Louela Small leather bucket bag",
      price: "1639",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00700449.jpg",
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
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/60/P00685951.jpg",
    },
    {
      brand: "BOTTEGA VENETA",
      name: "High-rise flared jeans",
      price: "745",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/30/P00698559.jpg",
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
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5b/P00697091.jpg",
    },
    {
      brand: "KHAITE",
      name: "High-rise flared jeans",
      price: "985",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/32/P00697061.jpg",
    },
    {
      brand: "ALAÏA",
      name: "High-rise flared jeans",
      price: "749",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00698545.jpg",
    },
    {
      brand: "JACQUEMUS",
      name: "High-rise flared jeans",
      price: "549",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00704875.jpg",
    },
    {
      brand: "BLUMARINE",
      name: "High-rise flared jeans",
      price: "825",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/15/P00716757.jpg",
    },
    {
      brand: "BLUMARINE",
      name: "High-rise flared jeans",
      price: "1179",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/be/P00716763.jpg",
    },
    {
      brand: "VALENTINO GARAVANI",
      name: "High-rise flared jeans",
      price: "775",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a0/P00694555.jpg",
    },
    {
      brand: "BLUMARINE",
      name: "High-rise flared jeans",
      price: "405",
      img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/92/P00712998.jpg",
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
  
  function sortbyPrice() {
    let selected = document.querySelector("#price").value;
    if (selected == "Ascending") {
      productData.sort(function (a, b) {
        return a.price - b.price;
      })
      displayData(productData);
    }
    if (selected == "Descending") {
      productData.sort(function (a, b) {
        return b.price - a.price;
      })
      displayData(productData);
    }
  }
  