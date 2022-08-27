let navbar = () => {

  return `<div id="top_navbar">
            <div id="topppp1">
                <p><a href="index.html">WOMEN</a></p>
                <p><a href="menhome.html">MEN</a></p>
                <p><a href="kids.html">KIDS</a></p>
                <p><a href="life.html">LIFE</a></p>
            </div>
            <div id="topppp2">
                <p><a href="signup.html">Signup for Newslatter</a></p>
                <p><a href="acount.html">My account</a></p>
                <p>
                    <a href="#">My wishlist <i class="fa-solid fa-heart"></i></a>
                </p>
                <p><a href="#">International | English</a></p>
            </div>
          </div>
          <div id="mid_navbar">
            <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220817T161813"
                alt="logo" />
            </a>

            <div id="side_navbar">
              <a href="checkout.html">SHOPPING BAG</a>
              <h4 id="count1"></h4>
            </div>
          </div>
          <div id="last">
            <div id="bottom_navbar">
                <div id="bottom_catg">
                    <p><a href="newarrival.html">NEW ARRIVALS</a></p>
                    <p><a href="#">DESIGNERS</a></p>
                    <p><a href="#">CLOTHING</a></p>
                    <p><a href="#">SHOES</a></p>
                    <p><a href="#">BAGS</a></p>
                    <p><a href="#">ACCESSORIES</a></p>
                    <p><a href="#">JEWELRY</a></p>
                    <p><a href="#">VACATION</a></p>
                    <p><a href="#">SALE</a></p>
                </div>
                <div id="bottom_input">
                    <div>
                        <input type="text" id="text" placeholder="Search for..." />
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div id="line"></div>
            <div id="top_bar">
                <h3>For a short time only: free shipping</h3>
            </div>
          </div>`

}
export default navbar;

/* <script type="module" >
import navbar from "./components/navbar.js"
document.getElementById("nb").innerHTML= navbar();
</script> */