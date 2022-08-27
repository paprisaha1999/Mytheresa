
let arr2=[ {photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f2/P00701029.jpg",
des:"RICK OWENS",
price: "€ 389"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/27/P00681392.jpg",
des:"THOM BROWN",
price: "€ 499"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/20/P00689995.jpg",
des:"RICK OWENS",
price: "€ 499"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/89/P00675275.jpg",
des:"KENZO",
price: "€ 599"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e5/P00714068.jpg",
des:"MONCLER",
price: "€ 699",
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ce/P00691376.jpg",
des:"JW ANDERSON",
price: "€ 799"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/93/P00690012.jpg",
des:"RICK OWENS",
price: "€ 699"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6c/P00714067.jpg",
des:"MONCLER",
price: "€ 249"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/84/P00681353.jpg",
des:"THOM BROWNE",
price: "€ 1199"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00675321.jpg",
des:"KENZO",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9e/P00681317.jpg",
des:"THOM BROWNE",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c6/P00691459.jpg",
des:"JW ANDERSON",
price: "€ 999"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/eb/P00691460.jpg",
des:"JW ANDERSON",
price: "€ 999"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a3/P00706100.jpg",
    des:"OUR LEGACY",
price: "€ 899"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/13/P00681139.jpg",
des:"Brunello Cucinelli",
price: "€ 599"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3a/P00674085.jpg",
    des:"GUCCI",
price: "€ 199"}];
 
  let go=0;
let back=0;
   // bt.addEventListener("click", function(){
    function button2(){
        if(back<4){
            back=12;
        }
        else{
            back=back-3;
        }
        
        document.querySelector(".i1>img").src=arr2[back].photo;
        document.querySelector(".i1>h4").innerText=arr2[back].des;
        document.querySelector(".i1>p").innerText=arr2[back].price;
    
        document.querySelector(".i2>img").src=arr2[back-1].photo;
        document.querySelector(".i2>h4").innerText=arr2[back-1].des;
        document.querySelector(".i2>p").innerText=arr2[back-1].price;
       
        document.querySelector(".i3>img").src=arr2[back-2].photo;
        document.querySelector(".i3>h4").innerText=arr2[back-2].des;
        document.querySelector(".i3>p").innerText=arr2[back-2].price;
    
        document.querySelector(".i4>img").src=arr2[back-3].photo;
        document.querySelector(".i4>h4").innerText=arr2[back-3].des;
        document.querySelector(".i4>p").innerText=arr2[back-3].price;
        
    }
    
   // btn.addEventListener("click", function()
   function button1(){
    
        if(go>=8){
            go=0;
        }
        else{
            go=go+3;
        }
        document.querySelector(".i1>img").src=arr2[go].photo;
        document.querySelector(".i1>h4").innerText=arr2[go].des;
        document.querySelector(".i1>p").innerText=arr2[go].price;
      
        document.querySelector(".i2>img").src=arr2[go+1].photo;
        document.querySelector(".i2>h4").innerText=arr2[go+1].des;
        document.querySelector(".i2>p").innerText=arr2[go+1].price;
       
        document.querySelector(".i3>img").src=arr2[go+2].photo;
        document.querySelector(".i3>h4").innerText=arr2[go+2].des;
        document.querySelector(".i3>p").innerText=arr2[go+2].price;
     
        document.querySelector(".i4>img").src=arr2[go+3].photo;
        document.querySelector(".i4>h4").innerText=arr2[go+3].des;
        document.querySelector(".i4>p").innerText=arr2[go+3].price;
       
    }
    function button3(){
    
    if(go>=8){
        go=0;
    }
    else{
        go=go+3;
    }
    document.querySelector(".j1>img").src=arr2[go].photo;
    document.querySelector(".j1>h4").innerText=arr2[go].des;
    document.querySelector(".j1>p").innerText=arr2[go].price;
  
    document.querySelector(".j2>img").src=arr2[go+1].photo;
    document.querySelector(".j2>h4").innerText=arr2[go+1].des;
    document.querySelector(".j2>p").innerText=arr2[go+1].price;
   
    document.querySelector(".j3>img").src=arr2[go+2].photo;
    document.querySelector(".j3>h4").innerText=arr2[go+2].des;
    document.querySelector(".j3>p").innerText=arr2[go+2].price;
 
    document.querySelector(".j4>img").src=arr2[go+3].photo;
    document.querySelector(".j4>h4").innerText=arr2[go+3].des;
    document.querySelector(".j4>p").innerText=arr2[go+3].price;
   
}
let arr3=[ {photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/66/P00697527.jpg",
des:"RICK OWENS",
price: "€ 389"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/db/P00690777.jpg",
des:"THOM BROWN",
price: "€ 499"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/20/P00689995.jpg",
des:"RICK OWENS",
price: "€ 499"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3c/P00694199.jpg",
des:"KENZO",
price: "€ 599"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/61/P00663138.jpg",
des:"MONCLER",
price: "€ 699",
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ce/P00691376.jpg",
des:"JW ANDERSON",
price: "€ 799"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/93/P00690012.jpg",
des:"RICK OWENS",
price: "€ 699"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f9/P00689985.jpg",
des:"MONCLER",
price: "€ 249"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/84/P00681353.jpg",
des:"THOM BROWNE",
price: "€ 1199"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00675321.jpg",
des:"KENZO",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9e/P00681317.jpg",
des:"THOM BROWNE",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c6/P00691459.jpg",
des:"JW ANDERSON",
price: "€ 999"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/eb/P00691460.jpg",
des:"JW ANDERSON",
price: "€ 999"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a3/P00706100.jpg",
    des:"OUR LEGACY",
price: "€ 899"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/13/P00681139.jpg",
des:"Brunello Cucinelli",
price: "€ 599"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3a/P00674085.jpg",
    des:"GUCCI",
price: "€ 199"}];
 
function button4(){
        if(back<4){
            back=10;
        }
        else{
            back=back-3;
        }
        
        document.querySelector(".j1>img").src=arr3[back].photo;
        document.querySelector(".j1>h4").innerText=arr3[back].des;
        document.querySelector(".j1>p").innerText=arr3[back].price;
    
        document.querySelector(".j2>img").src=arr3[back-1].photo;
        document.querySelector(".j2>h4").innerText=arr3[back-1].des;
        document.querySelector(".j2>p").innerText=arr3[back-1].price;
       
        document.querySelector(".j3>img").src=arr3[back-2].photo;
        document.querySelector(".j3>h4").innerText=arr3[back-2].des;
        document.querySelector(".j3>p").innerText=arr3[back-2].price;
    
        document.querySelector(".j4>img").src=arr3[back-3].photo;
        document.querySelector(".j4>h4").innerText=arr3[back-3].des;
        document.querySelector(".j4>p").innerText=arr3[back-3].price;
        
    }
    let arr4=[ {photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ef/P00667285.jpg",
des:"RICK OWENS",
price: "€ 389"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/54/P00512381.jpg",
des:"DOLCE & GABANA",
price: "€ 499"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/20/P00689995.jpg",
des:"RICK OWENS",
price: "€ 499"
},

{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/91/P00512375.jpg",
des:"DOLCE & GABANA",
price: "€ 799"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/11/P00667219.jpg",
des:"RICK OWENS",
price: "€ 699"
},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f9/P00689985.jpg",
des:"MONCLER",
price: "€ 249"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6a/P00667240.jpg",
des:"THOM BROWNE",
price: "€ 1199"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/01/P00667173.jpg",
des:"KENZO",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9e/P00681317.jpg",
des:"THOM BROWNE",
price: "€ 799"},
{photo:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c6/P00691459.jpg",
des:"JW ANDERSON",
price: "€ 999"}];
 
    function button5(){
        if(back<4){
            back=12;
        }
        else{
            back=back-3;
        }
        
        document.querySelector(".k1>img").src=arr4[back].photo;
        document.querySelector(".k1>h4").innerText=arr4[back].des;
        document.querySelector(".k1>p").innerText=arr4[back].price;

        document.querySelector(".k2>img").src=arr4[back-1].photo;
        document.querySelector(".k2>h4").innerText=arr4[back-1].des;
        document.querySelector(".k2>p").innerText=arr4[back-1].price;
       
        document.querySelector(".k3>img").src=arr4[back-2].photo;
        document.querySelector(".k3>h4").innerText=arr4[back-2].des;
        document.querySelector(".k3>p").innerText=arr4[back-2].price;

        document.querySelector(".k4>img").src=arr4[back-3].photo;
        document.querySelector(".k4>h4").innerText=arr4[back-3].des;
        document.querySelector(".k4>p").innerText=arr4[back-3].price;
        
    }
    
   // btn.addEventListener("click", function()
   function button6(){
    
        if(go>=8){
            go=0;
        }
        else{
            go=go+3;
        }
        document.querySelector(".k1>img").src=arr4[go].photo;
        document.querySelector(".k1>h4").innerText=arr4[go].des;
        document.querySelector(".k1>p").innerText=arr4[go].price;
      
        document.querySelector(".k2>img").src=arr4[go+1].photo;
        document.querySelector(".k2>h4").innerText=arr4[go+1].des;
        document.querySelector(".k2>p").innerText=arr4[go+1].price;
       
        document.querySelector(".k3>img").src=arr4[go+2].photo;
        document.querySelector(".k3>h4").innerText=arr4[go+2].des;
        document.querySelector(".k3>p").innerText=arr4[go+2].price;
     
        document.querySelector(".k4>img").src=arr4[go+3].photo;
        document.querySelector(".k4>h4").innerText=arr4[go+3].des;
        document.querySelector(".k4>p").innerText=arr4[go+3].price;
       
    }


function menproduct(){
    window.location.href="menproduct1.html";
}



