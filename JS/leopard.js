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

fetch('leopard.json')
  .then(response => response.json()) 
  .then(data => {
    if (!localStorage.getItem("leopard")) {
      localStorage.setItem('leopard', JSON.stringify(data));
    }
  })
    .catch(error => {
        console.error('Error fetching data:', error);
      });
      let  indexData = JSON.parse(localStorage.getItem("leopard"));
       ADDCONTENT(indexData.sections_leopard[0].content,"leopard-description");

    ADDCONTENT(indexData.sections_leopard[1].locations[0].title,"yala-title");
    ADDCONTENT(indexData.sections_leopard[1].locations[0].content,"yala-description");
  
    ADDCONTENT(indexData.sections_leopard[1].locations[1].title,"horton-title");
    ADDCONTENT(indexData.sections_leopard[1].locations[1].content,"horton-description");
  
    ADDCONTENT(indexData.sections_leopard[1].locations[2].title,"wilpattu-title");
    ADDCONTENT(indexData.sections_leopard[1].locations[2].content,"wilpattu-description");
  
    ADDCONTENT(indexData.sections_leopard[2].threats[0].title,"conflict-title");
    ADDCONTENT(indexData.sections_leopard[2].threats[0].content,"conflict-description");
  
    ADDCONTENT(indexData.sections_leopard[2].threats[1].title,"consequences-title");
    ADDCONTENT(indexData.sections_leopard[2].threats[1].content,"consequences-description");
  
    ADDCONTENT(indexData.sections_leopard[2].threats[2].title,"protect-title");
    ADDCONTENT(indexData.sections_leopard[2].threats[2].content,"protect-description");

    ADDCONTENT(indexData.sections_leopard[3].habitatLoss[0].title,"habitat-loss-title");
    ADDCONTENT(indexData.sections_leopard[3].habitatLoss[0].content,"habitat-loss-description");

    ADDCONTENT(indexData.sections_leopard[3].consequencesOfHabitatLoss[0].title,"consequences-heading");
    ADDCONTENT(indexData.sections_leopard[3].consequencesOfHabitatLoss[0].content,"habitat1-description");

    ADDCONTENT(indexData.sections_leopard[3].protectionMeasures[0].title,"protection-heading");
    ADDCONTENT(indexData.sections_leopard[3].protectionMeasures[0].content,"habitat2-description")

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
