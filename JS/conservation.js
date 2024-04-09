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

// fetch('conservation.json')
//   .then(response => response.json()) 
//   .then(data => {
        
//     if (!localStorage.getItem("conservation")) {  
//       localStorage.setItem('conservation', JSON.stringify(data));
//       }

//   })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//       });

      let  indexData = JSON.parse(localStorage.getItem("conservation"));

    ADDCONTENT(indexData.sections_dept[0].content,"department-description");

    ADDCONTENT(indexData.sections_dept[1].title,"title-gal-oya");
    ADDCONTENT(indexData.sections_dept[1].content,"description-gal-oya");
  
    ADDCONTENT(indexData.sections_dept[2].title,"title-hotan-plains");
    ADDCONTENT(indexData.sections_dept[2].content,"description-hotan-plains");
  
    ADDCONTENT(indexData.sections_dept[3].title,"title-wasgamuwa");
    ADDCONTENT(indexData.sections_dept[3].content,"description-wasgamuwa");
  
    ADDCONTENT(indexData.sections_dept[4].title,"title-kumana");
    ADDCONTENT(indexData.sections_dept[4].content,"description-kumana");
  
    ADDCONTENT(indexData.sections_dept[5].title,"title-bundala");
    ADDCONTENT(indexData.sections_dept[5].content,"description-bundala");
  
    ADDCONTENT(indexData.sections_dept[6].title,"title-chundikulam");
    ADDCONTENT(indexData.sections_dept[6].content,"description-chundikulam");

    
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

