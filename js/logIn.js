window.onload = init;

function init() {
  const userEmail = document.getElementById("email");
  const userPass = document.getElementById("password");
  const button = document.getElementById("button");
  const errorMess = document.getElementsByClassName("alert");
  button.addEventListener("click", () => {
    if (userEmail.value != "" && userPass.value != "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(userEmail.value, userPass.value)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMess);
        });
    } else if (userEmail.value == "") {
      errorMess[0].innerText = "Bạn chưa nhập email.";
      errorMess[0].classList.remove("show");
    } else if (userPass.value == "") {
      errorMess[1].innerText = "Bạn chưa nhập email.";
      errorMess[1].classList.remove("show");
    }
  });
}
