var firebaseConfig = {
    apiKey: "AIzaSyCZ70epQwR1bmkOCrovGX9xQ55CHoN-Qrc",
    authDomain: "super-original-project.firebaseapp.com",
    databaseURL: "https://super-original-project.firebaseio.com",
    projectId: "super-original-project",
    storageBucket: "super-original-project.appspot.com",
    messagingSenderId: "442170095409",
    appId: "1:442170095409:web:4371a828a6f599ab"
  };
  firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var trainName = $("#trainNameInput").val().trim();
var destination = $("#destinationInput").val().trim();
var firstTrain = moment($("#timeInput").val().trim(), "HH:mm").format("HH:mm");
var frequency = $("#frequencyInput").val().trim();
var newTrain = {
    name: trainName,
    place: destination,
    ftrain: firstTrain,
    freq: frequency
    }

$('#addTrainBtn').on("click", function() {
    database.ref().push(newTrain);
    console.log(newTrain.name);
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#timeInput").val("");
    $("#frequencyInput").val("");
    return false;
});

database.ref().on("child_added", function(childSnapshot) {
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().place;
    var firstTrain = childSnapshot.val().ftrain;
    var frequency = childSnapshot.val().freq;s
  });