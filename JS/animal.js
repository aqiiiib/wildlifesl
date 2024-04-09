function ADDCONTENT(value, id) {
  
    const ADDElement = document.getElementById(id);

    if (ADDElement) {
        ADDElement.innerHTML = value;
    } else {
        console.error(`Element with ID '${id}' not found.`);
    }
}

// fetch('Animal.json')
//   .then(response => response.json()) 
//   .then(data => {
//     if (!localStorage.getItem("Animal")) {  
//       localStorage.setItem('Animal', JSON.stringify(data));
//       }
//   })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//       });

    let  indexData = JSON.parse(localStorage.getItem("animal"));

    ADDCONTENT(indexData.sections_animal[0].title,"indi-title");
    ADDCONTENT(indexData.sections_animal[0].content,"indi-description");
    ADDCONTENT(indexData.sections_animal[1].title,"gallery-title");
  
    ADDCONTENT(indexData.sections_animal[1].animals[0].title,"ani-title-1");
    ADDCONTENT(indexData.sections_animal[1].animals[0].content,"ani-description-1");
  
    ADDCONTENT(indexData.sections_animal[1].animals[1].title,"ani-title-sloth-bear");
    ADDCONTENT(indexData.sections_animal[1].animals[1].content,"ani-description-sloth-bear");

    ADDCONTENT(indexData.sections_animal[1].animals[2].title,"ani-title-spotted-deer");
    ADDCONTENT(indexData.sections_animal[1].animals[2].content,"ani-description-spotted-deer");

    ADDCONTENT(indexData.sections_animal[1].animals[3].title,"ani-title-2");
    ADDCONTENT(indexData.sections_animal[1].animals[3].content,"ani-description-2");

    ADDCONTENT(indexData.sections_animal[1].animals[4].title,"ani-title-ceylon-spiny-mouse");
    ADDCONTENT(indexData.sections_animal[1].animals[4].content,"ani-description-ceylon-spiny-mouse");

    ADDCONTENT(indexData.sections_animal[1].animals[5].title,"ani-title-purple-faced-langur");
    ADDCONTENT(indexData.sections_animal[1].animals[5].content,"ani-description-purple-faced-langur");

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
