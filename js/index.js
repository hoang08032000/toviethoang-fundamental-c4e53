window.onload = init;

function init() {
  // view.showComponents("register");
  view.showComponents("loading");
  firebase.auth().onAuthStateChanged(function(user) {
    if (view.currentScreen == "register" || view.currentScreen == "logIn") {
      return;
    }
    if (user && user.emailVerified) {
      view.showComponents("chat");
    } else {
      view.showComponents("register");
    }
  });
}



// ~~~~~~~~~~~~~~~DEMO~~~~~~~~~~~~~~~

// async function demoQueryDatabase() {
//   //get many
//   let result = await firebase
//     .firestore()
//     .collection("demo")
//     .where("name", "==", "Hoang")
//     .get();
//   console.log(result);
//   let docs = result.docs;
//   for (let doc of docs) {
//     console.log(doc.id, doc.data());
//   }

//   //get one
//   let id = "bku850YnsEd3djnsSBuv";
//   let doc = await firebase
//     .firestore()
//     .collection("demo")
//     .doc(id)
//     .get();
//   console.log(doc.id, doc.data());

//   //Create
//   // let data = {
//   //   name: "An beo"
//   // };

//   // await firebase
//   //   .firestore()
//   //   .collection("demo")
//   //   .add(data);
//   // console.log("added new data");

//   //Update
//   // let id = "bku850YnsEd3djnsSBuv"
//   await firebase
//     .firestore()
//     .collection("demo")
//     .doc(id)
//     .update({
//       name: "To Viet Hoang",
//       array: firebase.firestore.FieldValue.arrayUnion("b")
//       // array: firebase.firestore.FieldValue.arrayRemove("b")  // xoa pt trong array
//     });

//   console.log("update data");

//   //Delete
//   // await firebase
//   //   .firestore()
//   //   .collection("demo")
//   //   .doc(id)
//   //   .delete();
// }

// demoQueryDatabase();
