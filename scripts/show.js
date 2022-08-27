let success=localStorage.getItem("Success");
let usrData=JSON.parse(localStorage.getItem("users")) ||[];
if(success=="True"){
    document.querySelector("#shown").innerHTML=`Hello ${usrData[0].fname}`;
    document.querySelector("#showname").innerHTML = `${usrData[0].fname} ${usrData[0].lname}`;
    document.querySelector("#showemail").innerHTML = usrData[0].email;
}else{
    window.location.href="signup.html";
}