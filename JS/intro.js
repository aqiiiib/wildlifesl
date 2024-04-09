function ADDCONTENT(value, id) {
    // Find the HTML element where you want to display the value
    const ADDElement = document.getElementById(id);

    // Check if the element exists before setting its innerHTML
    if (ADDElement) {
        ADDElement.innerHTML = value;
    } else {
        console.error(`Element with ID '${id}' not found.`);
    }
} 


// fetch('intro.json')
//   .then(response => response.json()) 
//   .then(data => {
//     if (!localStorage.getItem("Intro")) {  
//     localStorage.setItem('Intro', JSON.stringify(data));
//     }


//   })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//       });

      let  indexData = JSON.parse(localStorage.getItem("Intro"));

      
    ADDCONTENT(indexData.sections_intro[0].title,"wildlife-locations");
    ADDCONTENT(indexData.sections_intro[0].content,"wildlife-locations-text");


    ADDCONTENT(indexData.sections_intro[1].content[0].title,"sinharaja-reserve");
    ADDCONTENT(indexData.sections_intro[1].content[0].content,"sinharaja-description");

    ADDCONTENT(indexData.sections_intro[1].content[1].title,"horton-plains");
    ADDCONTENT(indexData.sections_intro[1].content[1].content,"horton-plains-description");

    ADDCONTENT(indexData.sections_intro[1].content[2].title,"knuckles-range");
    ADDCONTENT(indexData.sections_intro[1].content[2].content,"knuckles-description");

    if (localStorage.getItem("login")) {
      const  userInfo = JSON.parse(localStorage.getItem("login"));
      if  (userInfo == "admin"){
        const getPopup = `<a onclick="openPopup()">📝Edit</a>`;
        document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
        function openPopup() {
        window.open("editor.html", "", "width=800px, height=410px");
       }
      }
}
if(localStorage.getItem("login")){
  const  loginUser = `<li><a onclick="removeuser()">Logout</a></li>`;
  document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);
}
else{
 const  loginUser = `<li><a href="login.html">Login</a></li>`;
 document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);

}
function removeuser() {
 localStorage.removeItem('login');
 location.reload();
}
