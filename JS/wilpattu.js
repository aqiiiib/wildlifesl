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

// fetch('wilpattu.json')
//   .then(response => response.json()) 
//   .then(data => {
    
//     if (!localStorage.getItem("wilpattu")) {  
//       localStorage.setItem('wilpattu', JSON.stringify(data));
//       }

    
//   })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//       });
    let  indexData = JSON.parse(localStorage.getItem("wilpattu"));
    ADDCONTENT(indexData.sections_wilpattu[0].title,"wilpattu-discover-title");
    ADDCONTENT(indexData.sections_wilpattu[0].content,"wilpattu-discover-description");

    ADDCONTENT(indexData.sections_wilpattu[1].title,"wilpattu-menagerie-title");
    ADDCONTENT(indexData.sections_wilpattu[1].content_1,"wilpattu-menagerie-description-1");
    ADDCONTENT(indexData.sections_wilpattu[1].content_2,"wilpattu-menagerie-description-2");
    ADDCONTENT(indexData.sections_wilpattu[1].content_3,"wilpattu-menagerie-description-3");

    ADDCONTENT(indexData.sections_wilpattu[2].title,"wilpattu-conservation-title");
    ADDCONTENT(indexData.sections_wilpattu[2].content_1,"wilpattu-conservation-description-1");
    ADDCONTENT(indexData.sections_wilpattu[2].content_2,"wilpattu-conservation-description-2");

    
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
