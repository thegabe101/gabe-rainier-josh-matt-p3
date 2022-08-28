//two possible email validators

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
};

function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

function isUserName(val) {
    let regUser = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
    if (!regUser.test(val)) {
        return 'Your username can only use letters,numbers, minimum length is 8 characters';
    }
}

export default function validateEmail();
export default function isUserName();