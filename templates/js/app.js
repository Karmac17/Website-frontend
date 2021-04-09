AOS.init();

const API = `https://karmacglobal.herokuapp.com`;

var firebaseConfig = {
  apiKey: "AIzaSyDgJDjjxXgC7wn0OWjkBuR70xfcelLbmMs",
  authDomain: "karmac.firebaseapp.com",
  projectId: "karmac",
  storageBucket: "karmac.appspot.com",
  messagingSenderId: "875620689481",
  appId: "1:875620689481:web:13f58d969401e79538c198",
  measurementId: "G-4G4E48SZSS"
};

firebase.initializeApp(firebaseConfig);

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('hmmm', {
  'size': 'invisible',
  'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
  }
});

const appVerifier = window.recaptchaVerifier;

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// bars btn in header
const Bars_Btn = document.querySelector(".Bars_Btn");
Bars_Btn.addEventListener("click", () => {
  Bars_Btn.classList.toggle("active");
  document.querySelector("header nav").classList.toggle("active");
});

/**
  ChatBot
**/
const ChatBot = document.querySelector(".ChatBot");
const ChatBotImage = ChatBot.querySelector(".ImgBox");
const ChatBotScreen = ChatBot.querySelector(".ChatScreen");
const ChatBotClose = ChatBot.querySelector("#ChatBotClose");

ChatBotImage.addEventListener("click", () => {
  ChatBotImage.classList.remove("active");
  ChatBotScreen.classList.add("active");
});

ChatBotClose.addEventListener("click", () => {
  ChatBotImage.classList.add("active");
  ChatBotScreen.classList.remove("active");
});

//=// Popups || Start

// NewUser
// const BrandImageSelection = document.querySelector(".BrandImageSelection");
// const ModelImageSelection = document.querySelector(".ModelImageSelection");
// const BrandSearch = document.querySelector("#carBrandSearch");
// const ModelSearch = document.querySelector("#carModelSearch");

// const brandList = BrandImageSelection.querySelectorAll("a");
// const modelList = ModelImageSelection.querySelectorAll("a");
// var selectedCar;
// var selectedBrand = Array();

// brandList.forEach((brand) => {
//   brand.addEventListener("click", () => {
//     if (brand.className.includes("active")) {
//       brand.classList.remove("active");
//       if (selectedBrand.indexOf(brand.getAttribute("data-brand")) > -1) {
//         selectedBrand.splice(
//           selectedBrand.indexOf(brand.getAttribute("data-brand")),
//           1
//         );
//       }
//     } else {
//       brand.classList.add("active");
//       selectedBrand.push(brand.getAttribute("data-brand"));
//     }
//   });
// });
// modelList.forEach((model) => {
//   model.addEventListener("click", () => {
//     modelList.forEach((tempModel) => {
//       tempModel.classList.remove("active");
//     });
//     model.classList.add("active");
//     document.querySelector("input[name='carModel']").value = model.getAttribute(
//       "data-model"
//     );
//     selectedCar = model;
//   });
// });

// setInterval(() => {
//   var flag = false;
//   brandList.forEach((brand) => {
//     if (
//       !brand
//         .getAttribute("data-brand")
//         .includes(BrandSearch.value.toLowerCase())
//     ) {
//       brand.style.display = "none";
//     } else {
//       brand.style.display = "inline-flex";
//       flag = true;
//     }
//     if (!flag) {
//       BrandImageSelection.querySelector("h1").style.display = "inline-block";
//     } else {
//       BrandImageSelection.querySelector("h1").style.display = "none";
//     }
//   });
// }, 500);

// setInterval(() => {
//   var flag = false;
//   modelList.forEach((model) => {
//     if (
//       !model
//         .getAttribute("data-model")
//         .includes(ModelSearch.value.toLowerCase())
//     ) {
//       model.style.display = "none";
//     } else {
//       model.style.display = "none";

//       selectedBrand.forEach((br) => {
//         if (model.getAttribute("data-model").includes(br.toLowerCase())) {
//           model.style.display = "inline-flex";
//         }
//       });
//       if (selectedBrand.length == 0) model.style.display = "inline-flex";
//       if (model.style.display != "none") flag = true;
//     }
//     if (!flag) {
//       ModelImageSelection.querySelector("h1").style.display = "inline-block";
//     } else {
//       ModelImageSelection.querySelector("h1").style.display = "none";
//     }
//   });
// }, 500);

// const addCar = document.querySelector("#addCar");
// const variant = document.querySelector(".Variant select");
// const carReg = document.querySelector("#carRegistration");
// const carSelected = document.querySelector(".carSelected");
// var elementsInCarSelected = Array();

// var index = 1;
// addCar.addEventListener("click", () => {
//   if (document.querySelector("input[name='carModel']").value == "") {
//     alert("select a car model");
//   } else {
//     var x = `<a data-model="${selectedCar.getAttribute("data-model")}" href="#">
//               <button type="button" class="closeSelectedCarElem">&times;</button>
//               <input type="text" name="carModel_${index}" 
//                 value="${selectedCar.getAttribute("data-model")}" hidden>
//               <input type="text" name="registrationNumber_${index}"
//                 value="${carReg.value}" hidden>
//               <input type="text" name="variant_${index}"
//                 value="${variant.value}" hidden>
//               <img src="${selectedCar.querySelector("img").src}" alt="" />
//               <p>${selectedCar.querySelector("p").innerText}</p>
//             </a>`;
//     elementsInCarSelected.push(x);
//     carSelected.innerHTML += x;
//     document.querySelector("input[name='carModel']").value = "";
//     carReg.value = "";
//     index++;
//     selectedCar.classList.remove("active");
//   }
// });

// setInterval(() => {
//   var removeCar = carSelected.querySelectorAll(".closeSelectedCarElem");
//   removeCar.forEach((rmCar) => {
//     rmCar.addEventListener("click", () => {
//       var i = 0;
//       var j = -1;
//       removeCar.forEach((rmCAR) => {
//         if (rmCAR == rmCar) j = i;
//         i++;
//       });

//       if (j > -1) {
//         elementsInCarSelected.splice(j, 1);
//         carSelected.innerHTML = "<h4>Selected cars</h4>";
//         elementsInCarSelected.forEach((elem) => {
//           carSelected.innerHTML += elem;
//         });
//       }
//     });
//   });
// }, 2000);

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

// signUp_submitOTP.addEventListener("click", () => {
//   const otp = document.querySelector('input[name="otp"]').value;
//   const sessionId = localStorage.getItem("sessionId");
//   const phoneNumber = localStorage.getItem("phoneNumber");
//   data = { otp, sessionId, phoneNumber };
//   console.log(JSON.stringify(data));
//   if (otp.length == 4) {
//     // fetch(`${API}/user/verify`, {
//     //   method: "POST", // *GET, POST, PUT, DELETE, etc.
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(data), // body data type must match "Content-Type" header
//     // })
//     //   .then((response) => response.json())
//     //   .then((response) => {
//     //     if (response.msg) {
//     //       alert(response.msg);
//     //     } else {
//     //       LoginPopup.classList.remove("active");
//     //       localStorage.setItem("token", response.token);
//     //       setTimeout(() => {
//     //         document.querySelector(".NewUser").classList.add("active");
//     //       }, 500);
//     //     }
//     //   })
//     //   .catch((err) => {
//     //     alert(err);
//     //   });
//   } else {
//     alert("Enter valid OTP");
//   }
// });

signUpNextwithOTP.addEventListener("click", () => {
  const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  localStorage.setItem("phoneNumber", phoneNumber);
  data = { phoneNumber };

  if (phoneNumber.length == 10) {
    // fetch(`${API}/user/signup`, {
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
    //       document.querySelector("#signUp1withOTP").classList.remove("active");
    //       document.querySelector("#signUp2withOTP").classList.add("active");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    firebase.auth().signInWithPhoneNumber('+91'+phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                document.querySelector("#signUp1withOTP").classList.remove("active");
                document.querySelector("#signUp2withOTP").classList.add("active");
                signUp_submitOTP.addEventListener("click",()=>{
                  const otp = document.querySelector('input[name="otp"]').value;
                  
                  confirmationResult.confirm(otp).then((result) => {
                    // User signed in successfully.
                    //const user = result.user;
                    // ...
                    console.log('sucess')
                    LoginPopup.classList.remove("active");
                    document.querySelector(".NewUser").classList.add("active");
                  }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    console.log(error)
                  });
                  
                });
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    
  } else {
    alert("Enter valid mobile number");
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
