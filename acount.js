let userData = JSON.parse(localStorage.getItem("users")) || [];
let signup = () => {
  let fName = document.querySelector("#fname").value;
  let lName = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let passwd1 = document.querySelector("#pass1").value;
  let passwd2 = document.querySelector("#pass2").value;
  if (fName == "" || lName == "" || passwd1 == "" || passwd2 == "") {
    alert("Please enter the details..");
  } else {
    if (passwd1 == passwd2) {
      let userDetails = new user(fName, lName, email, passwd2);
      if (verifyData(userDetails.email) === true) {
        userData.push(userDetails);
        localStorage.setItem("users", JSON.stringify(userData));
        alert("signup successful....!");
        window.location.reload();
      } else {
        alert("user already exist");
      }
    } else {
      alert("Password didn't match...!");
    }
  }
};
function user(n, c, e, p) {
  this.fname = n;
  this.lname = c;
  this.email = e;
  this.passwd = p;
}
function verifyData(email) {
  let Filter = userData.filter(function (elem) {
    return elem.email === email;
  });
  if (Filter.length > 0) {
    return false;
  } else {
    return true;
  }
}
let login = () => {
  let email = document.querySelector("#logEmail").value;
  let passwd = document.querySelector("#logPasswd").value;
  if (dataFetch(email, passwd) === true) {
    alert("login successful");
    localStorage.setItem("Success","True");
    window.location.href="show.html";
  } else {
    alert("wrong credentials");
  }
};
function dataFetch(email, password) {
  let Filter = userData.filter(function (elem) {
    return elem.email === email && elem.passwd === password;
  });
  if (Filter.length > 0) {
    return true;
  } else {
    return false;
  }
}
