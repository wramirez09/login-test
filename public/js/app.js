
let app = {};
const REG_FORM = "#registerForm"
const LOGIN_FORM = "#_loginForm"
const REG_INPUTS = "#registerForm :input"
const LOGIN_INPUTS = "#_loginForm :input"
const $registerform = $(REG_FORM);
const $registerInputs = $(REG_INPUTS);
const $loginInputs = $(LOGIN_INPUTS);
const $loginForm = $(LOGIN_FORM);
let regData = {};
let loginData = {};

app.sendRegistrationData = function(data){
    $.ajax({
        url: "http://localhost:3069/register/",
        data: regData,
        success: function(returnedData) {
            printSuccessMessage(returnedData);
        }
    }).done(function(returnedData) {
        console.log('done');
    });
}

app.sendLoginData = function(){
    $.ajax({
        url: "http://localhost:3069/login/",
        data: loginData,
        success: function(returnedData) {
            printSuccessMessage(returnedData);
        }
    }).done(function(returnedData) {
        console.log('done');
    });
}

function printSuccessMessage(returnedData){
    $(".message").html(returnedData.message).hide().fadeIn("easein");
    $registerform.hide();
}


$registerform.submit(function(event){
    event.preventDefault();
    
    $registerInputs.each(function(){
        regData[this.name] = $(this).val();
    });

    app.sendRegistrationData(regData);
});


$loginForm.submit(function(event){
    event.preventDefault();

    $loginInputs.each(function(){
        loginData[this.name] = $(this).val();
    });

    app.sendLoginData(loginData);


});