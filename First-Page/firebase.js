const firebaseConfig = {
    apiKey: "AIzaSyB0z4obYD1fXtaEg2Lzk15bRyQ-TJYsVg8",
    authDomain: "drivesupplies-22827.firebaseapp.com",
    databaseURL: "https://drivesupplies-22827-default-rtdb.firebaseio.com",
    projectId: "drivesupplies-22827",
    storageBucket: "drivesupplies-22827.appspot.com",
    messagingSenderId: "803695426395",
    appId: "1:803695426395:web:e643f8ba5da9b00d48387e",
    measurementId: "G-CN3K4H82TN"
  };
//initize firebase 
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var driveSuppliesDB = firebase.database.ref('driveSupplies');

  document.getElementById('teacher').addEventListener('submit', submitForm);


  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('userId');
    var email = getElementVal('emailAddress');
    var password = getElementVal('password');
    var schoolorgainzation = getElementVal('schoolOrgainzation');
  }

  const getElementById = (id) => {
    return document.getElementById(id).value;
  }