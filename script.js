//Get our document ready
$(document).ready(
  function () {
    //Define API key in constant APIKEY
    const APIKEY = "63e3ceff478852088da67ed7";
    //getUsers();
    //$("success-msg").hide();
    console.log("script");
    //Create submit form listener
    $("#user-submit").on("click", function (e) {
      //prevent default action of button
      e.preventDefault();
      //Retrieve data that user has keyed in
      let userfname = $("#user-fname").val();
      let userlname = $("#user-lname").val();
      let useremail = $("#user-email").val();
      let userpassword = $("#user-password").val();
      let usercontact = $("#user-contact").val();
      let userbilling = $("#user-billing").val();
      console.log("Retrieved values!!");

      // var settings = {
      //   "async": true,
      //   "crossDomain": true,
      //   "url": "https://vhdla-26d3.restdb.io/rest/memberaccount",
      //   "method": "GET",
      //   "headers": {
      //     "content-type": "application/json",
      //     "x-apikey": APIKEY,
      //     "cache-control": "no-cache"
      //   }
      // }

      // $.ajax(settings).done(function (response) {
      //   console.log(response);
      // });

      //get form values when submit is clicked
      let jsondata = {
        FirstName: userfname,
        LastName: userlname,
        EmailAddress: useremail,
        Password: userpassword,
        ContactNumber: usercontact,
        BillingAddress: userbilling,
      };

      var settings = {
        async: true,
        crossDomain: true,
        url: "https://vhdla-26d3.restdb.io/rest/memberaccount",
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache",
        },

        processData: false,
        data: JSON.stringify(jsondata),
        beforeSend: function () {
          //disable button/show loading bar
          $("#user-submit").prop("disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-user-form").trigger("reset");
          // window.location.href = "../4. Member Page/create-success.html";
          console.log("POST!!");
        },
      };
      //calls ajax
      $.ajax(settings).done(function (response) {
        console.log("done");
        console.log(response);
        $("#user-submit").prop("disabled", false);
        $("#success-msg").show().fadeOut(3000);
        //getUsers();
      });
    });

    // //create update listener
    // $("#user-submit").on("click", ".update", function(e){
    //     e.preventDefault();

    //     //update data to form
    //     let userfname = $(this).data("First Name");
    //     let userlname = $(this).data("Last Name");
    //     let useremail = $(this).data("Email Address");
    //     let userpassword = $(this).data("Password");
    //     let usercontact = $(this).data("Contact Number");
    //     let userbilling = $(this).data("Billing Address");
    //     console.log($(this).data("First Name"));

    //     $("#update-user-fname").val(userfname);
    //     $("#update-user-lname").val(userlname);
    //     $("#update-user-email").val(useremail);
    //     $("#update-user-password").val(userpassword);
    //     $("#update-user-contact").val(usercontact);
    //     $("#update-user-billing").val(userbilling);
    //     $("#update-user-container").show();
    //     });
    //     $("#update-contact-submit").on("click", function (e) {
    //       e.preventDefault();
    //       //retrieve all my update form values
    //       let userfname = $("#update-user-fname").val();
    //       let userlname = $("#update-user-lname").val();
    //       let useremail = $("#update-user-email").val();
    //       let userpassword = $("#update-user-password").val();
    //       let usercontact = $("#update-user-contact").val();
    //       let userbilling = $("#update-user-billing").val();

    //     updateForm(userfname, userlname, useremail, userpassword, usercontact, userbilling);
    //     });
    //     function updateForm(userfname, userlname, useremail, userpassword, usercontact, userbilling){
    //     var  jsondata = {
    //       "First Name": userfname,
    //       "Last Name": userlname,
    //       "Email Address": useremail,
    //       "Password": userpassword,
    //       "Contact Number": usercontact,
    //       "Billing Address": userbilling

    //     };

    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": `https://interactivedev-adbb.restdb.io/rest/contact/${useremail}`,
    //     "method": "PUT",
    //     "headers": {
    //       "content-type": "application/json",
    //       "x-apikey": APIKEY,
    //       "cache-control": "no-cache"
    //     },
    //     "processData": false,
    //     "data": JSON.stringify(jsondata)
    //   }
    //   console.log("PUT!!")

    //   $.ajax(settings).done(function(response){
    //     console.log(response);

    //     $("#update-user-container").fadeOut(5000);
    //     //update table
    //     //getUsers();
    //     });
  }
  //}
);


// function openPage(pageName,elmnt,color) 
// {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) 
//     {
//       tabcontent[i].style.display = "none";
//     }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) 
//     {
//       tablinks[i].style.backgroundColor = "";
//     }
//   windows.open(pageName + ".html");
//   elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();