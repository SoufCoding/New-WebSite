let searchIcon = document.querySelector('#search');
let searchInput = document.querySelector('.input-container');
let searchClose = document.querySelector('#close');

searchIcon.onclick =function () {
    if (searchInput.style.left = '100%') {
        searchInput.style.left = '0';
        searchIcon.style.display = 'none';
        searchClose.style.display = 'block';
    }
};

searchClose.onclick =function () {
    if (searchInput.style.left = '0') {
        searchInput.style.left = '100%';
        searchIcon.style.display = 'block';
        searchClose.style.display = 'none';
    }
}








/************** ******/




/*
function sendMail() {
    let tempParams ={
        from_name: uName.value,
        to_name: uName.value,
        the_subject: subject.value,
        from_email: email.value,
        message: mMessage.value,
    }
    emailjs.send('service1','template1', tempParams)
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });
}


window.onload = function() {
    cForm.addEventListener('submit', function(event) {
        event.preventDefault();
        this.User_Name.value;
        this.User_Subject.value;
        this.User_Email.value;
        this.Message.value;

        emailjs.sendForm('service1','template1', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

*/


function validData() {
    let cForm = document.getElementById('contact-form')
    let uName  = document.querySelector('.User_Name');
    let subject  = document.querySelector('.User_Subject');
    let email  = document.querySelector('.User_Email');
    let mMessage  = document.querySelector('.Message');
    let submit  = document.querySelector('.submit');

    submit.addEventListener('click', function (e) {
        if (uName.value == "" || subject.value == "" || email.value == "" || mMessage.value == "" ) {
            inputEmpty();
        }
        else{
            sendMail(uName.value, subject.value, email.value, mMessage.value)
            success();
            console.log('send mail')
        }
    })
}

validData()

function sendMail(uName, subject, mMessage, email) {
    emailjs.send("service1","template1",{
        to_name: uName,
        from_name: uName,
        the_subject:subject,
        message: mMessage,
        from_email: email,
    });
}


function success() {
    swal ( {
        title: "Good job!",
        text: "Your message has been sent!",
        icon: "success",
        button: "Ok!",
      });
}
function error() {
    swal ( {
        title: "Oops...!",
        text: "Something Wrong, Message could not be send!",
        icon: "error",
        button: "Ok!",
      });
}
function inputEmpty() {
    swal ( {
        title: "Oops...!",
        text: "Inputs fields are required!",
        icon: "error",
        button: "OK!",
      });
}

