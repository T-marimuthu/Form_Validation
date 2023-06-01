const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e) => {
    e.preventDefault()
   validateInput()
})

function validateInput(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()


    if(usernameVal === ''){
        setError(username, 'user name is required')
    }
    else if(usernameVal.length<5){
      setError(username,"please type more than 5 words")
      
    }
    else{
        setSuccess(username)
    }
     if(emailVal === ''){
        setError(email,'email is required')
     }
     else if(!validateEmail(emailVal)) {
        setError(email,'please enter email')
     }
     else{
        setSuccess(email)
     } 

     if(passwordVal === ''){
        setError(password,'password is required')
     }
     else if(passwordVal.length<8) {
        setError(password,'password must be atleast 8 value')
     }
     else{
        setSuccess(password)
     }
     if(cpasswordVal === ''){
        setError(cpassword,'conform password is requied')
     }
     else if(cpasswordVal !== passwordVal){
        setError(cpassword,'password not matching')
     }
     else{
        setSuccess(cpassword)
     }
}

//element password msg owd is req
function setError(element,message){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ''
    inputGroup.classList.add('success')
   inputGroup.classList.remove('error')
}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    )
}

username.addEventListener("blur",function(){
   const usernameVal = username.value.trim()
   if(usernameVal ===""){
      setError(username,"required")
      username.classList.add("invalid")
   }
   else if(usernameVal.length<5){
      setError(username,"please type more than 5 words")
      
    }
    else{
        setSuccess(username)
    }
   username.addEventListener("focus",function(){
      if(this.classList.contains("invalid")){
         this.classList.remove("invalid")
         error.innerHTML=""
         username.style.borderColor="green"
      }
   })
})

email.addEventListener("blur",function(){
   const emailVal = email.value.trim()
   if(emailVal ===""){
      setError(email,"required")
      username.classList.add("invalid")
   }
   else{
      setSuccess(email)
   }
   email.addEventListener("focus",function(){
      if(this.classList.contains("invalid")){
         this.classList.remove("invalid")
         error.innerHTML=""
         username.style.borderColor="green"
      }
   })
})

password.addEventListener("blur",function(){
   const passwordVal = password.value.trim()
   if(passwordVal ===""){
      setError(password,"required")
      username.classList.add("invalid")
   }
   else{
      setSuccess(password)
   }
   password.addEventListener("focus",function(){
      if(this.classList.contains("invalid")){
         this.classList.remove("invalid")
         error.innerHTML=""
         username.style.borderColor="green"
      }

   })
})
cpassword.addEventListener("blur",function(){
   const cpasswordVal =cpassword.value.trim()
   if(cpasswordVal ===""){
      setError(cpassword,"required")
      username.classList.add("invalid")
   }
   else{
      setSuccess(cpassword)
   }
   cpassword.addEventListener("focus",function(){
      if(this.classList.contains("invalid")){
         this.classList.remove("invalid")
         error.innerHTML=""
         username.style.borderColor="green"
      }
   })
})``



