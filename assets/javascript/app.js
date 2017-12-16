  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBJdWpBAUx-z1Wv1FaHmyVvEPuG5lB4hE",
    authDomain: "fir-211a4.firebaseapp.com",
    databaseURL: "https://fir-211a4.firebaseio.com",
    projectId: "fir-211a4",
    storageBucket: "fir-211a4.appspot.com",
    messagingSenderId: "1076746239285"
  };
  firebase.initializeApp(config);

let database = firebase.database();
// let ref = firebase.database().ref();  instead of typing database.ref();

// Initial Values
let employeeName = "";
let role = "";
let startDate = "";
let monthlyRate = "";


$("#submitBtn").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();

    employeeName = $('#employeeName').val().trim();
    role = $('#role').val().trim();
    startDate = $('#startTime').val().trim();
    monthlyRate = $('#monthlyRate').val().trim();

    let employeeInfo={
        employeeName : employeeName,
        role : role,
        startDate: startDate,
        monthlyRate : monthlyRate
    };
     // Uploads employee data to the database
    database.ref().push(employeeInfo);

    $('#employeeName').val('');
    $('#role').val('');
    $('#startTime').val('');
    $('#monthlyRate').val('');
});

database.ref().on('child_added', function(childSnapshot, prevChildName) {
  // do something with the child
  let name = childSnapshot.val().employeeName;
  let role = childSnapshot.val().role;
  let startDate = childSnapshot.val().startDate;
  let monthlyRate = childSnapshot.val().monthlyRate;
  let month =( moment().diff(startDate, 'months'));
  let totalBilled = (month*monthlyRate);
  console.log(name);
  
  $("#rowSpace").append(`<tr><td> ${name} </td>
                      <td> ${role} </td>
                      <td> ${startDate} </td>
                      <td> ${moment().diff(startDate, 'months')} </td>
                      <td> ${monthlyRate} </td>
                      <td> ${totalBilled} </td> </tr>`);

  
});













 
 