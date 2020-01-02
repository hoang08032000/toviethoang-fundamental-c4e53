const controller = {};

controller.register = async function(registerInfo) {
  let email = registerInfo.email;
  let password = registerInfo.password;
  let displayName = registerInfo.lastName + " " + registerInfo.firstName;
  view.setText("register-success", "");
  view.setText("register-error", "");
  view.disable("register-btn");
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName
    });
    await firebase.auth().currentUser.sendEmailVerification();
    view.setText("register-success", "An verification email has been sent to your email address!");
  } catch (err) {
    view.setText("register-error", err.message);
  }
  view.enable("register-btn");
};

controller.logIn = async function(logInInfo) {
  let email = logInInfo.email;
  let password = logInInfo.password;
  view.setText("log-in-error", "");
  try {
    let result = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (!result.user || !result.user.emailVerified) {
      throw new Error("User must verify email!");
    }
    view.showComponents("chat");
  } catch (err) {
    view.setText("log-in-error", err.message);
  }
};

controller.loadConversations = async function() {
  // get many conversation
  let currentEmail = firebase.auth().currentUser.email
  let result = await firebase
    .firestore()
    .collection("conversations")
    .where("users", "array-contains", currentEmail)
    .get();
    
    let conversations = tranformDocs(result.docs);
    console.log(conversations);
    model.saveConversation(conversations)
    if(conversations.length) {
      let currentConversation = conversations[0]
      model.saveCurrentConversation(currentConversation)
    }
};

function tranformDocs(docs) {
  let datas = [];
  for (let doc of docs) {
    let data = doc.data();
    data.id = doc.id;
    datas.push(data);
  }
  return datas
}

function tranformDoc(doc) {
  let data = doc.data();
  data.id = doc.id;
  return data;
}
