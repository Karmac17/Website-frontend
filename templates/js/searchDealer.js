const API = `https://karmacglobal.herokuapp.com`;

// bars btn in header
const Bars_Btn = document.querySelector(".Bars_Btn");
Bars_Btn.addEventListener("click", () => {
  Bars_Btn.classList.toggle("active");
  document.querySelector("header nav").classList.toggle("active");
});

const filterBoxBtn = document.querySelector("#filterBoxBtn");
const applyFiltersBtn = document.querySelector("#applyFilters");
const sideFilterBox = document.querySelector(".sideFilterBox");

filterBoxBtn.addEventListener("click", () => {
  sideFilterBox.classList.add("active");
});

applyFiltersBtn.addEventListener("click", () => {
  sideFilterBox.classList.remove("active");
});

// document.getElementById("get-location").addEventListener("click", getLocation);
function getLocation() {
  if (!navigator.geolocation) {
    alert("location not supported by this browser.");
  } else {
    console.log("Checking location...");
    var locationAPI = "";
    const Http = new XMLHttpRequest();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        locationAPI =
          locationAPI +
          "?lat=" +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "";
        console.log(locationAPI);
        Http.open("GET", locationAPI);
        Http.send();
        Http.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
          }
        };
      },
      (err) => {
        alert(err);
      }
    );
  }
}

//=// Popups || Start

// Login/Signup Popup show/hide
const LoginPopup = document.querySelector(".LoginPopup");
const LoginBtn = document.querySelector("#LoginBtn");
LoginBtn.addEventListener("click", () => {
  LoginPopup.classList.add("active");
  LoginToggle();
});
const loginCloseBtn = document.querySelector("#loginCloseBtn");
loginCloseBtn.addEventListener("click", () => {
  LoginPopup.classList.remove("active");
});

// login/signup in Login Popup toggle
const SignUpModal = document.querySelector("#SignUpModal");
const LoginModal = document.querySelector("#LogInModal");
function LoginToggle() {
  SignUpModal.classList.toggle("active");
  LoginModal.classList.toggle("active");
}

//signUp with otp
//next btn
const signUpNextwithOTP = document.querySelector("#signUpNextwithOTP");
const signUp_submitOTP = document.querySelector("#signUp_submitOTP");

signUp_submitOTP.addEventListener("click", () => {
  const otp = document.querySelector('input[name="otp"]').value;
  const sessionId = localStorage.getItem("sessionId");
  const phoneNumber = localStorage.getItem("phoneNumber");
  data = { otp, sessionId, phoneNumber };
  console.log(JSON.stringify(data));
  if (otp.length == 4) {
  //   fetch(`${API}/user/verify`, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.msg) {
  //         alert(response.msg);
  //       } else {
  //         LoginPopup.classList.remove("active");
  //         localStorage.setItem("token", response.token);
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // } else {
  //   alert("Enter valid OTP");
   }
});

signUpNextwithOTP.addEventListener("click", () => {
  const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  localStorage.setItem("phoneNumber", phoneNumber);
  data = { phoneNumber };

  if (phoneNumber.length == 10) {
  //   fetch(`${API}/user/signup`, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.msg) {
  //         alert(response.msg);
  //       } else {
  //         localStorage.setItem("sessionId", response.sessionId);
  //         document.querySelector("#signUp1withOTP").classList.remove("active");
  //         document.querySelector("#signUp2withOTP").classList.add("active");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // } else {
  //   alert("Enter valid mobile number");
   }
});
//back btn
const signUpBackwithOTP = document.querySelector("#signUpBackwithOTP");
signUpBackwithOTP.addEventListener("click", () => {
  document.querySelector("#signUp1withOTP").classList.add("active");
  document.querySelector("#signUp2withOTP").classList.remove("active");
});

//signUp with email
//next btn
const signUpNextwithEmail = document.querySelector("#signUpNextwithEmail");
signUpNextwithEmail.addEventListener("click", () => {
  if (1) {
    document.querySelector("#signUp1withEmail").classList.remove("active");
    document.querySelector("#signUp2withEmail").classList.add("active");
  } else {
    alert("Enter valid email");
  }
});
//back btn
const signUpBackwithEmail = document.querySelector("#signUpBackwithEmail");
signUpBackwithEmail.addEventListener("click", () => {
  document.querySelector("#signUp1withEmail").classList.add("active");
  document.querySelector("#signUp2withEmail").classList.remove("active");
});

//signUp Method
const signUpMethod = document.querySelector("#SignUpMethod");
signUpMethod.addEventListener("click", () => {
  document.querySelector("#signUpwithOTP").classList.toggle("active");
  document.querySelector("#signUpwithEmail").classList.toggle("active");
  signUpMethod.innerText =
    signUpMethod.innerText === "Sign Up with Mobile"
      ? "Sign Up with Email"
      : "Sign Up with Mobile";
});

// login backend
//next btn
const logInNextwithOTP = document.querySelector("#logInNextwithOTP");
const logIn_submitOTP = document.querySelector("#logIn_submitOTP");

logIn_submitOTP.addEventListener("click", () => {
  const otp = LoginModal.querySelector('input[name="otp"]').value;
  const sessionId = localStorage.getItem("sessionId");
  const phoneNumber = localStorage.getItem("phoneNumber");
  data = { otp, sessionId, phoneNumber };
  console.log(JSON.stringify(data));
  if (otp.length == 4) {
    // fetch(`${API}/user/verify`, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.msg) {
    //       alert(response.msg);
    //     } else {
    //       LoginPopup.classList.remove("active");
    //       localStorage.setItem("token", response.token);
    //       // hide login btn once logged in
    //       LoginBtn.classList.add("hide");
    //       // show menu btn once logged in
    //       MenuBtn.classList.remove("hide");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  } else {
    alert("Enter valid OTP");
  }
});

logInNextwithOTP.addEventListener("click", () => {
  console.log("Yeah");
  const phoneNumber = LoginModal.querySelector('input[name="phoneNumberL"]')
    .value;
  localStorage.setItem("phoneNumber", phoneNumber);
  data = { phoneNumber };
  if (phoneNumber.length == 10) {
    // fetch(`${API}/user/login`, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.msg) {
    //       alert(response.msg);
    //     } else {
    //       localStorage.setItem("sessionId", response.sessionId);
    //       document.querySelector("#logIn1withOTP").classList.remove("active");
    //       document.querySelector("#logIn2withOTP").classList.add("active");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  } else {
    alert("Enter valid mobile number");
  }
});

//back btn
const logInBackwithOTP = document.querySelector("#logInBackwithOTP");
logInBackwithOTP.addEventListener("click", () => {
  document.querySelector("#logIn1withOTP").classList.add("active");
  document.querySelector("#logIn2withOTP").classList.remove("active");
});

//logIn with email
//next btn
const logInNextwithEmail = document.querySelector("#logInNextwithEmail");
logInNextwithEmail.addEventListener("click", () => {
  if (1) {
    document.querySelector("#logIn1withEmail").classList.remove("active");
    document.querySelector("#logIn2withEmail").classList.add("active");
  } else {
    alert("Enter valid email");
  }
});
//back btn
const logInBackwithEmail = document.querySelector("#logInBackwithEmail");
logInBackwithEmail.addEventListener("click", () => {
  document.querySelector("#logIn1withEmail").classList.add("active");
  document.querySelector("#logIn2withEmail").classList.remove("active");
});

//logIn Method
const logInMethod = document.querySelector("#logInMethod");
logInMethod.addEventListener("click", () => {
  document.querySelector("#logInwithOTP").classList.toggle("active");
  document.querySelector("#logInwithEmail").classList.toggle("active");
  logInMethod.innerText =
    logInMethod.innerText === "Log In with Mobile"
      ? "Log In with Email"
      : "Log In with Mobile";
});

// SideNav Popup
const SideNavMenu = document.querySelector(".SideNavMenu");
const MenuBtn = document.querySelector("#MenuBtn");
MenuBtn.addEventListener("click", () => {
  SideNavMenu.classList.add("active");
});
const sideNavMenuCloseBtn = document.querySelector("#sideNavMenuCloseBtn");
sideNavMenuCloseBtn.addEventListener("click", () => {
  SideNavMenu.classList.remove("active");
});
function removeSidemenuPopup() {
  SideNavMenu.classList.remove("active");
}

// show login only when user is not logged in
if (localStorage.getItem("token") != null) {
  LoginBtn.classList.add("hide");
  MenuBtn.classList.remove("hide");
} else {
  LoginBtn.classList.remove("hide");
  MenuBtn.classList.add("hide");
}

// logout
const logoutBtn = SideNavMenu.querySelector("ul button");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  // show login btn when logged out
  LoginBtn.classList.remove("hide");
  // hide menu btn when logged out
  MenuBtn.classList.add("hide");
  SideNavMenu.classList.remove("active");
});

//=// Popups || End
