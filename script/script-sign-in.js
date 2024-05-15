

let users = []
users = localStorage.getItem("users")
console.log(users)
// console.log(typeof users)
users = JSON.parse(users)
// console.log(users)
// console.log(typeof users)

let emailname = document.getElementById("emailname")
let password = document.getElementById("password")
let signInBtn = document.getElementById("sign-in-btn")

signInBtn.addEventListener("click", ()=>{
    users.forEach((EPuser) => {
        if (EPuser.emailname === emailname.value ) {
            if( EPuser.password === password.value){
                // alert("hggg")
            window.location.href = "../pages/indexC.html"
            } else {
            alert("Sign in Unsuccessfully")
        } 
        } else {
            alert("Sign in Unsuccessfully")
        }


    })
})