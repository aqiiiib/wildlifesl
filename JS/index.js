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


  // fetch('data.json')
  // .then(response =>response.json())
  // .then((indexData )=> {
  //   if (!localStorage.getItem("data")) {
  //     localStorage.setItem("data", JSON.stringify(indexData))

  //   }
  //   })
  //     .catch(error => {
  //         console.error('Error fetching Data:', error);
  //       });
   
        const indexData = JSON.parse(localStorage.getItem("data"));

        
        ADDCONTENT(indexData.sections_index[0].title,"giants-title");
        ADDCONTENT(indexData.sections_index[0].content_1,"giants-text");
        ADDCONTENT(indexData.sections_index[0].content_2,"giants-text2");
        ADDCONTENT(indexData.sections_index[0].content_3,"giants-text3");
    
        ADDCONTENT(indexData.sections_index[1].title,"apex-title");
        ADDCONTENT(indexData.sections_index[1].content_1,"apex-text");
        ADDCONTENT(indexData.sections_index[1].content_2,"apex-text2");
        ADDCONTENT(indexData.sections_index[1].content_3,"apex-text3");
    
        ADDCONTENT(indexData.sections_index[2].title,"jewel-title");
        ADDCONTENT(indexData.sections_index[2].content,"jewel-text");
      
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