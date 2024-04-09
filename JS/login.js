// Get references to HTML elements
const button = document.getElementById("submit");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("pass");

// Function to handle form submission
function checkUser(e) {
    e.preventDefault(); // Prevent form submission

    // Get the entered username and password
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Retrieve user details from localStorage
    let user_details_json = localStorage.getItem("User_Logins");
    let user_details = JSON.parse(user_details_json);

    let check =0;

    // Check if username and password match any user
    user_details.forEach(User => {
        if (username === "admin" && password === "admin") {
            check=1;
        }
        else if(username==="user" && password==="user"){
            check=2;
        }
    });
    if (check===1) {
        window.location.href = "dashboard.html";
        localStorage.setItem("login",JSON.stringify("admin"));
    }
    else if (check===2) {
        window.location.href = "index.html";
        localStorage.setItem("login",JSON.stringify("user"));
    } else {
        alert("Invalid username or password!");
    }
}


button.addEventListener("click", checkUser);

function redirect() {
    window.location.href = "Newsletter.html";
}

fetch('User.json')
    .then(response => response.json())
    .then(data => {
        let User_Logins_json = JSON.stringify(data);
        localStorage.setItem("User_Logins", User_Logins_json);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
