// step 1: add click event handler with the submit button
document.getElementById('button-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email field
    // note: always remember to use .value to get text from an input field!
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    // 3.1: set id on html element
    // 3.2: get the element 
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // note: do not verify email password on the client side
    //step-4: verify email and password
    if(email === 'mehedi@gmail.com' & password === 'iqra007@'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})