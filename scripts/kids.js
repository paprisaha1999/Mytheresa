let arr2=[ {photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3d/P00715743_d2.jpg",
des:"BONPOINT",
price: "€ 39"},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/f7/P00699459_b1.jpg",
des:"MOSCHINO KIDS",
price: "€ 119"
},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ba/P00714215_b1.jpg",
des:"IL GUFO",
price: "€ 99"
},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3b/P00687632_b1.jpg",
des:"STELLA MCCARTNEY KIDS",
price: "€ 149"
},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/aa/P00722045_b1.jpg",
des:"POLO RALPH LAUREN KIDS",
price: "€ 199",
},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/50/P00722051_b1.jpg",
des:"POLO RALPH LAUREN KIDS",
price: "€ 139"
},
{photo:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5a/P00690420.jpg",
des:"MONNALISA",
price: "€ 99"
}];
 
  let go=0;
let back=0;
   // bt.addEventListener("click", function(){
    function button2(){
        if(back<5){
            back=7;
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

        document.querySelector(".i5>img").src=arr2[back-3].photo;
        document.querySelector(".i5>h4").innerText=arr2[back-3].des;
        document.querySelector(".i5>p").innerText=arr2[back-3].price;
        
    }
    
   // btn.addEventListener("click", function()
   function button1(){
    
        if(go>8){
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