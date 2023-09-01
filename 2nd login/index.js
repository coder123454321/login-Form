console.log("helo")
let signinbtn=document.getElementById('signIn')
let signupbtn=document.getElementById('signUp')
let titlebtn=document.getElementById('title')
let name1=document.getElementById('nameFiled')
let forget=document.getElementsByClassName("forget-password")
let hh=document.getElementsByClassName("form-box")
signupbtn.onclick=(()=>{
    name1.style.maxHeight="0"
    titlebtn.innerHTML="sign Up"
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
})

signinbtn.onclick=(()=>{
    name1.style.maxHeight="60px"
    titlebtn.innerHTML="sign In"
    signinbtn.classList.remove("disable")
    signupbtn.classList.add("disable")
})
forget.addEventListener("click",element=>{
    alert("welcome to the prabhat home page==")
    document.body.style.backgroundColor = "red";
})

