function Submit(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const allUsers = JSON.parse(localStorage.getItem("users"));
    
    //use find loop for best approach
    for(i = 0; i < allUsers.length; i++){
        if(allUsers[i].email == email && allUsers[i].password == password){
            localStorage.setItem("activeUser", JSON.stringify({email, password, username: allUsers[i].username}))
            console.log("logged In")
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.href="https://waqasalamzeb.github.io/Todo-App/"
        } 
        
        else {
            console.log("OYE GALAT HAI")
        }
    }
    
}
