document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('Fullname');
    fields.lastName = document.getElementById('Email');
    fields.email = document.getElementById('Message');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(Email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+=?^_'{|}~-]+@[a-zA-z0-9](?:[a-zA-z0-9-]{0,61}[a-zA-z0-9])?(?:\.[a-zA-z0-9](?:[a-zA-z0-9-]{0,61}[a-zA-z0-9])?)*$/;
    return regex.test(String(Email).toLowerCase());
}

class User {
    constructor(Fullname,Email,Message) {
    this.Fullname = Fullname;
    this.Email = Email;
    this.Message = Message;
    }
}

function sendContact() {
    if (isVaild()) {
        let usr = new User(Fullname.value,Email.value,Message.value)

        alert('${usr.Fullname} Thanks for registering. ')
    } else{
        alert("There was an error")
    }
}