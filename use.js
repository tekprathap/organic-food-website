
// Register
let form2=document.querySelector('#form2');
let email2=document.querySelector('#email2');
let password2=document.querySelector('#password2')

form2.addEventListener('submit',(e)=>{
    e.preventDefault()
    validation()
    
})

// trim value

function validation() {
    let emailvalue2=email2.value.trim();
    let passwordvalue2=password2.value.trim();

    // vcondition check

    // email validation
    if (emailvalue2==="") {
        seterror(email2,"enter the email")
    }
    else{
        setsuccess(email2)
    }
    // password validtion

    if (passwordvalue2==="") {
        seterror(password2,"enter the password")
    }
    else{
        setsuccess(password2)
    }
    if (emailvalue2!="" && passwordvalue2!="") {
        alert('accespt')
    }
   
}

// set errr

function seterror(element,message) {
    let grupcontrol=element.parentElement;
    let errorcontrol=grupcontrol.querySelector('.error')
    errorcontrol.innerText=message;
    grupcontrol.classList.add('error')
    grupcontrol.classList.remove('success')
}
function setsuccess(element) {
    let grupcontrol=element.parentElement;
    let errorcontrol=grupcontrol.querySelector('.error')
    errorcontrol.innerText="";
    grupcontrol.classList.add('success')
    grupcontrol.classList.remove('error')
}