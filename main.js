// document.addEventListener('DOMContentLoaded',()=>{
// const loginForm = document.querySelector('#login');
// const createAccountForm = document.querySelector('#CreateAccount');
// const ForgotPassword = document.querySelector('#forgotPassword');



// document.querySelector('#LinkCreateAccount').addEventListener('click',e => {
//     e.preventDefault();
//     ForgotPassword.classList.add('form_hidden');
//     loginForm.classList.add('form_hidden');
//     createAccountForm.classList.remove('form_hidden'); 

// });

// document.querySelector('#link_signin').addEventListener('click',e => {
//     e.preventDefault();
//     loginForm.classList.remove('form_hidden');
//     createAccountForm.classList.add('form_hidden');
//     ForgotPassword.classList.add('form_hidden');
    
// });

// document.querySelector('#LinkforgotPassword').addEventListener('click',e =>{
//     e.preventDefault();
//     ForgotPassword.classList.remove('form_hidden');
//     loginForm.classList.add('form_hidden');
//     createAccountForm.classList.add('form_hidden');
// });



// });

const loginForm = document.querySelector('#login');
const createAccountForm = document.querySelector('#CreateAccount');
const ForgotPassword = document.querySelector('#forgotPassword');
const linkcreateaccount  = document.querySelectorAll('#LinkCreateAccount');

linkcreateaccount.forEach(element => {
  element.addEventListener('click',()=>
  linkcreateaccount.forEach((element)=>{
    ForgotPassword.classList.add('form_hidden');
    loginForm.classList.add('form_hidden');
    createAccountForm.classList.remove('form_hidden'); 
  })
  
  )  
});

// document.querySelectorall('#LinkCreateAccount').addEventListener('click',e => {
  
//     ForgotPassword.classList.add('form_hidden');
//     loginForm.classList.add('form_hidden');
//     createAccountForm.classList.remove('form_hidden'); 

// });

document.querySelector('#link_signin').addEventListener('click',e => {

        loginForm.classList.remove('form_hidden');
        createAccountForm.classList.add('form_hidden');
        ForgotPassword.classList.add('form_hidden');
});

document.querySelector('#LinkforgotPassword').addEventListener('click',e =>{

    ForgotPassword.classList.remove('form_hidden');
    loginForm.classList.add('form_hidden');
    createAccountForm.classList.add('form_hidden');
});

