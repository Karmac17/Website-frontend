axios
  .post(`${API}/user/signup`, user)
  .then((res) => {
    console.log(res);
    if (res.status === 200) {
      document.querySelector("#signUp1withOTP").classList.remove("active");
      document.querySelector("#signUp2withOTP").classList.add("active");
    }
  })
  .catch((err) => {
    alert(err);
  });

const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
localStorage.setItem("phonenumber", phoneNumber);
