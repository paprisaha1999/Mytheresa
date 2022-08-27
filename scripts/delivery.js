function userDataCf(n, l, c, s, a, p, city, con, num){
    this.userFname      =   n;
    this.userLname      =   l;
    this.userCname      =   c;
    this.userStreet     =   s;
    this.userAddress    =   a;
    this.userPostcode   =   p;
    this.userCity       =   city;
    this.UserCoutry     =   con;
    this.userNumber     =   num;
}

let storage  = JSON.parse(localStorage.getItem("userInfo")) || [] ;

function userData(event){
    event.preventDefault();

    let form = document.getElementById("userData");

    let userFname = form.userFname.value;
    let userLname = form.userLname.value;
    let userCname = form.userCname.value;
    let userStreet = form.userStreet.value;
    let userAddress = form.userAddress.value;
    let userPostcode = form.userPostcode.value;
    let userCity = form.userCity.value;
    let UserCoutry = form.UserCoutry.value;
    let userNumber = form.userNumber.value;

    let data = new userDataCf(userFname, userLname, userCname, userStreet, userAddress, userPostcode, userCity, UserCoutry, userNumber);

    storage.push(data);
    console.log(data);

    
    if(data.userFname==="" || data.userLname==="" || data.userCname==="" || data.userStreet==="" || data.userAddress==="" || data.userPostcode==="" || data.userCity==="" || data.UserCoutry==="" || data.userNumber===""){
        alert("Enter required fields");
    }   
    else{
        localStorage.setItem("userInfo", JSON.stringify(storage));
        alert(`${userFname} Your Order is placed `);
        window.location.href = "index.html"
    }
}
