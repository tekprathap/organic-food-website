var form=document.querySelector('#form');
var name2=document.querySelector('#name2');
var secondname=document.querySelector('#secondname');
var email=document.querySelector('#email');
var password=document.querySelector('#password');
var passwordcnfrim=document.querySelector('#passwordcnfrim');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    formvalidation()
})
// trim value

function formvalidation() {
    let name2val=name2.value.trim();
    let secondnameval=secondname.value.trim();
    let emailval=email.value.trim();
    let passwordval=password.value.trim();
    let passwordcnfrimval=passwordcnfrim.value.trim();
    // username
    if (name2val==="") {
        seterror2(name2,"enter the first name")
    }
    else{
        setsucces2(name2)
    }
    // secnd name
    if (secondnameval==="") {
        seterror2(secondname,"enter the last name")
    }
    else{
        setsucces2(secondname)
    }
    // email
    if (emailval==="") {
        seterror2(email,"enter the emal")
    }
    else{
        setsucces2(email)
    }
    // password1
    if (passwordval==="") {
        seterror2(password,"enter the password")
    }
    else{
        setsucces2(password)
    }
    // password2
   if (passwordcnfrimval==="") {
     seterror2(passwordcnfrim,"enter the conform passwprd")
   }
   else{
    setsucces2(passwordcnfrim)
   }
   if (passwordval!==passwordcnfrimval) {
    seterror2(passwordcnfrim,"dos not match")
   }

}

// set error
function seterror2(element,message2) {
    let grupelement=element.parentElement;
    let errrelement=grupelement.querySelector('.error')
    errrelement.innerText=message2;
    grupelement.classList.add('error')
    grupelement.classList.remove('success')
}
function setsucces2(element) {
    let grupelement=element.parentElement;
    let errrelement=grupelement.querySelector('.error')
    errrelement.innerText="";
    grupelement.classList.remove('error')
    grupelement.classList.add('success')
}