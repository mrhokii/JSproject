let user = {} // مشخصات کاربران
let users = []  // ارایه برای  نگهداشتن مشخصات کابران
let userstring = [] // ارایه خالی برای استرینگ کردن ابجکت ها 

let username = document.getElementById("username")
let emailname = document.getElementById("emailname")
let password = document.getElementById("password")
let cPassword = document.getElementById("c-password")
let createAccoundBtn = document.getElementById("create-accound-btn")


createAccoundBtn.addEventListener("click" , ()=>{

if(username.value  == ""){
    alert("Enter username")
    username.focus()
    
}else if(emailname.value == ""){
    alert("Enter emailname")
    emailname.focus()

}else if(!emailname.value.endsWith("@gmail.com")){
    alert("Enter your email with @gmail.com")

}else if(password.value == ""){
    alert("Enter password")
    password.focus()

}else if(cPassword.value == ""){
    alert("Enter Confirm Password")
    cPassword.focus()

}else if(password.value != cPassword.value){
    alert("The password does not match")
    cPassword.value = ""
    cPassword.focus()
}else{
    user = {
        "username": username.value ,
        "emailname": emailname.value ,
        "password": password.value 
    }
    // console.log(user)
    password.value = ""
    cPassword.value = ""
    users.push(user) //  اضاف کردن مشخصات کاربران 
    // console.log(users)
    // console.log(typeof users)
    setUsers ()
    window.location.href = "../pages/sign-in.html";
    
}

})

function setUsers () {
    userstring = JSON.stringify(users) // تبدیل ابجکت به استرینگ برای ست کردن در لوکال استوریج
    // console.log(userstring)
    // console.log(typeof userstring)
    localStorage.setItem("users", userstring)
}



