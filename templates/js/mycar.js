// if user not authorised
if (localStorage.getItem("token") == null) {
  window.location.href = "http://localhost:5000/index.html";
}

if (window.outerWidth < 600) {
  var NoOfSlidesPerView = 1;
  var spaceBetweenSlides = 10;
} else {
  var NoOfSlidesPerView = 2;
  var spaceBetweenSlides = 20;
}

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: NoOfSlidesPerView,
  spaceBetween: spaceBetweenSlides,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Navbar
const Bars_Btn = document.querySelector(".Bars_Btn");
Bars_Btn.addEventListener("click", () => {
  Bars_Btn.classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
});

const notificationBtn = document.querySelector("#notificationBtn");
const notificationModal = document.querySelector(".notificationModal");
const closeNotificationModal = document.querySelector(
  "#closeNotificationModal"
);

notificationBtn.addEventListener("click", () => {
  notificationModal.classList.toggle("active");
});

closeNotificationModal.addEventListener("click", () => {
  notificationModal.classList.remove("active");
});

// logout
const logoutBtn = document.querySelector(".logoutBtn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "http://localhost:5000/index.html";
});

// Add / Remove Car
const Add_RemoveCar = document.querySelector(".Add_RemoveCar");
const closeAdd_RemoveCar = document.querySelector("#closeAdd_RemoveCar");
const BrandImageSelection = document.querySelector(".BrandImageSelection");
const ModelImageSelection = document.querySelector(".ModelImageSelection");
const BrandSearch = document.querySelector("#carBrandSearch");
const ModelSearch = document.querySelector("#carModelSearch");

closeAdd_RemoveCar.addEventListener("click", () => {
  Add_RemoveCar.classList.remove("active");
});

const toggleAdd_RemoveCar = Add_RemoveCar.querySelectorAll("nav a");

toggleAdd_RemoveCar.forEach((itm) => {
  itm.addEventListener("click", () => {
    toggleAdd_RemoveCar[0].classList.toggle("active");
    toggleAdd_RemoveCar[1].classList.toggle("active");
    if (itm.innerText == "Add Car") {
      Add_RemoveCar.querySelector("form").classList.add("active");
      Add_RemoveCar.querySelector(".listOfCar").classList.remove("active");
    } else {
      Add_RemoveCar.querySelector("form").classList.remove("active");
      Add_RemoveCar.querySelector(".listOfCar").classList.add("active");
    }
  });
});

const manageCar = document.querySelector("#manageCar");

manageCar.addEventListener("click", () => {
  Add_RemoveCar.classList.add("active");
});

const brandList = BrandImageSelection.querySelectorAll("a");
const modelList = ModelImageSelection.querySelectorAll("a");
var selectedCar;
var selectedBrand = Array();

brandList.forEach((brand) => {
  brand.addEventListener("click", () => {
    if (brand.className.includes("active")) {
      brand.classList.remove("active");
      if (selectedBrand.indexOf(brand.getAttribute("data-brand")) > -1) {
        selectedBrand.splice(
          selectedBrand.indexOf(brand.getAttribute("data-brand")),
          1
        );
      }
    } else {
      brand.classList.add("active");
      selectedBrand.push(brand.getAttribute("data-brand"));
    }
  });
});
modelList.forEach((model) => {
  model.addEventListener("click", () => {
    modelList.forEach((tempModel) => {
      tempModel.classList.remove("active");
    });
    model.classList.add("active");
    document.querySelector("input[name='carModel']").value = model.getAttribute(
      "data-model"
    );
    selectedCar = model;
  });
});

setInterval(() => {
  var flag = false;
  brandList.forEach((brand) => {
    if (
      !brand
        .getAttribute("data-brand")
        .includes(BrandSearch.value.toLowerCase())
    ) {
      brand.style.display = "none";
    } else {
      brand.style.display = "inline-flex";
      flag = true;
    }
    if (!flag) {
      BrandImageSelection.querySelector("h1").style.display = "inline-block";
    } else {
      BrandImageSelection.querySelector("h1").style.display = "none";
    }
  });
}, 500);

setInterval(() => {
  var flag = false;
  modelList.forEach((model) => {
    if (
      !model
        .getAttribute("data-model")
        .includes(ModelSearch.value.toLowerCase())
    ) {
      model.style.display = "none";
    } else {
      model.style.display = "none";

      selectedBrand.forEach((br) => {
        if (model.getAttribute("data-model").includes(br.toLowerCase())) {
          model.style.display = "inline-flex";
        }
      });
      if (selectedBrand.length == 0) model.style.display = "inline-flex";
      if (model.style.display != "none") flag = true;
    }
    if (!flag) {
      ModelImageSelection.querySelector("h1").style.display = "inline-block";
    } else {
      ModelImageSelection.querySelector("h1").style.display = "none";
    }
  });
}, 500);

const addCar = document.querySelector("#addCar");
const variant = document.querySelector(".Variant select");
const carReg = document.querySelector("#carRegistration");
const carSelected = document.querySelector(".carSelected");
var elementsInCarSelected = Array();

var index = 1;
addCar.addEventListener("click", () => {
  if (document.querySelector("input[name='carModel']").value == "") {
    alert("select a car model");
  } else {
    var x = `<a data-model="${selectedCar.getAttribute("data-model")}" href="#">
              <button type="button" class="closeSelectedCarElem">&times;</button>
              <input type="text" name="carModel_${index}" 
                value="${selectedCar.getAttribute("data-model")}" hidden>
              <input type="text" name="registrationNumber_${index}"
                value="${carReg.value}" hidden>
              <input type="text" name="variant_${index}"
                value="${variant.value}" hidden>
              <img src="${selectedCar.querySelector("img").src}" alt="" />
              <p>${selectedCar.querySelector("p").innerText}</p>
            </a>`;
    elementsInCarSelected.push(x);
    carSelected.innerHTML += x;
    document.querySelector("input[name='carModel']").value = "";
    carReg.value = "";
    index++;
    selectedCar.classList.remove("active");
  }
});

setInterval(() => {
  var removeCar = carSelected.querySelectorAll(".closeSelectedCarElem");
  removeCar.forEach((rmCar) => {
    rmCar.addEventListener("click", () => {
      var i = 0;
      var j = -1;
      removeCar.forEach((rmCAR) => {
        if (rmCAR == rmCar) j = i;
        i++;
      });

      if (j > -1) {
        elementsInCarSelected.splice(j, 1);
        carSelected.innerHTML = "<h4>Selected cars</h4>";
        elementsInCarSelected.forEach((elem) => {
          carSelected.innerHTML += elem;
        });
      }
    });
  });
}, 2000);
