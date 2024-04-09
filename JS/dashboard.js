
const user=localStorage.getItem('login');
document.getElementById("h2").innerHTML=`Welcome To Dashboard`  + ` \n${user}` ; 
function list_generator(array) {
    let code = ``;
    let array_size = array.length;
    for (let i = 0; i < array_size; i++) {
      code += `<li>${array[i]}</li>`;
    }
    return code;
  }

const emails = JSON.parse(localStorage.getItem("subscribedEmails"))
document.getElementById("newsletter_emails").innerHTML = list_generator(emails);
