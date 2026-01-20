let signUpBtn=document.querySelector('.signUpBtn');
let signInBtn=document.querySelector('.signInBtn');
let namefield=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    namefield.style.maxHeight='0';
    title.innerHTML='Sign In';
    text.innerHTML='Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(35px)';
});
signUpBtn.addEventListener('click',()=>{
    namefield.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    title.innerHTML='Password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform='translateX(35px)';
});