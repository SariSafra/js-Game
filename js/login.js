let all_users;

function sign_up() {
    let user_email = document.getElementById('user_email').value;
    while(!user_email) {
        alert("Please enter email adress.");
        return;
    }
    let user_password = document.getElementById('user_password').value;
    while(!user_password) {
        alert("Please enter password.");
        return;
    }
    all_users = (JSON.parse(localStorage.getItem("users")) || []);
    let flag = true;
    all_users.forEach(element => {
        if (element.new_email == user_email) {
            alert("This email adress already exsists. Please login.");
            flag = false;
        } 
    }); 
    if(flag) {
       add_new_user(user_email, user_password);
       window.open("../html/homepage.html", "self");               
    }          
}
function add_new_user(email, password) {
    if(!email || !password) {
        return;
    }
    let new_user = {
        new_email: email,
        new_password: password
    };    
    all_users.push(new_user);
    localStorage.setItem("users", JSON.stringify(all_users));  

}


function login() {
    let user_email_login = document.getElementById('user_email_login').value;
    while(!user_email_login) {
        alert("Please enter email adress.");
        return;
    }
    let user_password_login = document.getElementById('user_password_login').value;
    while(!user_password_login) {
        alert("Please enter password.");
        return;
    }
    let all_users_login = (JSON.parse(localStorage.getItem("users")));    
    if (!all_users_login) {
        alert("No data available. Please sign up.");
    }
    else {
        all_users_login.forEach(element => {
            if (element.new_email == user_email_login) {
                if(element.new_password == user_password_login) {                    
                    window.open("../html/homepage.html", "self"); 
                } else {
                    alert("Error receiving the data. Please sign up.");
                }                
            }

        })
    }    

}


const login_btn = document.getElementById("for_login_btn");
login_btn.addEventListener('click', function() {
    document.getElementById("login_form").style.display = "block";    
    document.getElementById("login_form").style.padding = "12px 20px";
    document.getElementById("login_form").style.margin = "8px 0";
    document.getElementById("for_login_btn").style.display = "none";
    document.getElementById("signup_form").style.display = "none";
})




