
const view = {
  currentScreen: null
};

view.showComponents = async function(screenName) {
  view.currentScreen = screenName;
  switch (screenName) {
    case "register": {
      let app = document.getElementById("app");
      app.innerHTML = components.register;

      // link
      let link = document.getElementById("register-link");
      link.onclick = linkClickHandler;

      let form = document.getElementById("register-form");
      form.onsubmit = formSubmitHandler;
      // form
      function linkClickHandler() {
        view.showComponents("logIn");
      }

      function formSubmitHandler(event) {
        event.preventDefault();
        // Get data
        let registerInfo = {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          email: form.email.value,
          password: form.password.value,
          confirmPassword: form.confirmPassword.value
        };

        // Validate data
        // if (!registerInfo.firstName) {
        //   view.setText("first-name-error", "Invalid first name");
        // } else {
        //   view.setText("first-name-error", "");
        //   console.log(registerInfo);
        // }

        view.validate("first-name-error", [registerInfo.firstName.trim(), "Invalid first name!"]);
        view.validate("last-name-error", [registerInfo.lastName.trim(), "Invalid last name!"]);
        view.validate("email-error", [registerInfo.email.trim().toLowerCase(), "Invalid email!"]);
        view.validate("password-error", [
          registerInfo.password,
          "Invalid password!",
          registerInfo.password.length >= 6,
          "Password length must greater or equals than 6!"
        ]);

        view.validate("confirm-password-error", [
          registerInfo.confirmPassword,
          "Invalid confirm password!",
          registerInfo.password == registerInfo.confirmPassword,
          "Password and confirm password not match!"
        ]);
        let validateResult = [
          view.validate("first-name-error", [registerInfo.firstName.trim(), "Invalid first name!"]),
          view.validate("last-name-error", [registerInfo.lastName.trim(), "Invalid last name!"]),
          view.validate("email-error", [registerInfo.email.trim().toLowerCase(), "Invalid email!"]),
          view.validate("password-error", [
            registerInfo.password,
            "Invalid password!",
            registerInfo.password.length >= 6,
            "Password length must greater or equals than 6!"
          ]),

          view.validate("confirm-password-error", [
            registerInfo.confirmPassword,
            "Invalid confirm password!",
            registerInfo.password == registerInfo.confirmPassword,
            "Password and confirm password not match!"
          ])
        ];
        console.log(validateResult);
        // Submit data

        if (view.allPassed(validateResult)) {
          controller.register(registerInfo);
        }
      }

      break;
    }
    case "logIn": {
      let app = document.getElementById("app");
      app.innerHTML = components.logIn;

      // link
      let link = document.getElementById("log-in-link");
      link.onclick = linkClickHandler;
      let form = document.getElementById("log-in-form");
      form.onsubmit = formSubmitHandler;

      // form
      function linkClickHandler() {
        view.showComponents("register");
      }

      function formSubmitHandler(event) {
        event.preventDefault();
        let logInInfo = {
          email: form.email.value,
          password: form.password.value
        };
        view.validate("email-error", [logInInfo.email.trim(), "Invalid email!"]);
        view.validate("password-error", [logInInfo.password, "Invalid password!"]);

        let validateResult = [
          view.validate("email-error", [logInInfo.email.trim(), "Invalid email!"]),
          view.validate("password-error", [logInInfo.password, "Invalid password!"])
        ];
        if (view.allPassed(validateResult)) {
          controller.logIn(logInInfo);
        }
      }

      // validate

      break;
    }

    case "chat": {
      let app = document.getElementById("app");
      app.innerHTML = components.chat;

      await controller.loadConversations() // load all conversations and save to model
      await view.showCurrentConversation() // read data from model and display to  screen





      break;
    }

    case "loading": {
      let app = document.getElementById("app");
      app.innerHTML = components.lodaing;

      break;
    }
  }
};

view.showCurrentConversation = function() {
  let listMessage = document.getElementsByClassName("list-messages")
  // if(model.currentConversation){
  //   // get all message
  //   for(mess of model.currentConversation){
  //   //   listMessage.innerHTML = `
  //   //   <div class="message">
  //   //   <span>${mess.message[0].content}</span>
  //   // </div>
  //   //   `
  //   console.log(mess.message[0].content)
  //   }

    // display all message to "list messages"
  // }
}



view.setText = function(id, text) {
  document.getElementById(id).innerText = text;
};

view.validate = function(idErrorTag, validateInfos) {
  for (let i = 0; i < validateInfos.length; i += 2) {
    let condition = validateInfos[i];
    let message = validateInfos[i + 1];
    if (!condition) {
      view.setText(idErrorTag, message);
      return false;
    }
  }
  view.setText(idErrorTag, "");
  return true;
};

// disable button
view.disable = function(id) {
  document.getElementById(id).setAttribute("disabled", true);
};
// enable button
view.enable = function(id) {
  document.getElementById(id).removeAttribute("disabled");
};

view.allPassed = function(validateResult) {
  for (let result of validateResult) {
    if (!result) {
      return false;
    }
  }
  return true;
};

