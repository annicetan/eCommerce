$(document).ready(function(){
    const APIKEY = "63d26f58a95709597409cfe7";
    getUsers();
    
    //Create submit form listener
    $("#user-submit").on("click", function(e){
        e.preventDefault();

        //Retrieve data that user has keyed in
        let userfname = $("#user-fname").val();
        let userlname = $("#user-lname").val();
        let useremail = $("#user-email").val();
        let usercontact = $("#user-contact").val();
        let userbilling = $("#user-billing").val();
        let userpostal = $("#user-postal").val();

        //get form values when submit is clicked
        let jsondata = {
            FirstName: userfname,
            LastName: userlname,
            EmailAdd: useremail,
            Contact: usercontact,
            BillingAdd: userbilling,
            Postal: userpostal
        };
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://vhdla-26d3.restdb.io/rest/memberaccount",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend": function(){
                //disable button/show loading bar
                $("#user-submit").prop( "disabled", true);
                //clear our form using the form id and triggering it's reset feature
                window.location.href = "./4. Member Page/create-sucess.html";
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $("#user-submit").prop("disabled", false);

            $("#add-update-msg").show().fadeOut(3000);

            getUsers();
          });
    });
    //create function to allow to retrieve all information
    function getUsers(limit = 10, all = true) {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://vhdla-26d3.restdb.io/rest/memberaccount",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            let content = "";
            for (var i = 0; i < response.length && 1 < limit; i++){
                content = `${content}<tr id='${response[i]._id}'><td>${response[i].FirstName}</td>
                <td>${response[i].LastName}</td>
                <td>${response[i].EmailAdd}</td>
                <td>${response[i].Contact}</td>
                <td>${response[i].BillingAdd}</td>
                <td>${response[i].Postal}</td>
                <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td>
                <td><a href='#update-student-container' class='update' data-id='${response[i]._id}' data-name='${response[i].FirstName}' data-id='${response[i].LastName}' data-mentor='${response[i].EmailAdd} data-class='${response[i].Contact} data-course='${response[i].BillingAdd} data-year='${response[i].Postal}'>Update</a></td></tr>`;
           
            }
            console.log(response);
          });
    }

    //create update listener
    $("#user-submit").on("click", ".update", function(e){
        e.preventDefault();

        //update data to form
        let userfname = $("#user-fname").val();
        let userlname = $("#user-lname").val();
        let useremail = $("#user-email").val();
        let usercontact = $("#user-contact").val();
        let userbilling = $("#user-billing").val();
        let userpostal = $("#user-postal").val();

        $("#update-user-fname").val(userfname);
        $("#update-user-lname").val(userlname);
        $("#update-user-email").val(useremail);
        $("#update-user-contact").val(usercontact);
        $("#update-user-billing").val(userbilling);
        $("#update-user-postal").val(userpostal);

        updateForm(userfname, userlname, useremail, usercontact, userbilling, userpostal); 
        });
    function updateForm(userfname, userlname, useremail, usercontact, userbilling, userpostal);
    var  jsondata = {
        FirstName: userfname,
        LastName: userlname,
        EmailAdd: useremail,
        Contact: usercontact,
        BillingAdd: userbilling,
        Postal: userpostal
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://vhdla-26d3.restdb.io/rest/memberaccount/(ObjectID)",
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      
        getUsers();
        
        });
});

