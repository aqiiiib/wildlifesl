// Array of file names
const fileNames = [
    "data.json",
    "Intro.json",
    "conservation.json",
    "leopard.json",
    "animal.json",
    "wilpattu.json",
    "Yala.json",
    "Users.json"
  ];
  
  // Check if localStorage length is less than 7
  if (localStorage.length < 7) {
    console.log("this code runs");
  
    // Iterate over the fileNames array
    fileNames.forEach(fileName => {
      // Fetch data for each file
      fetch(fileName)
        .then(response => response.json())
        .then(data => {
          // Check if data doesn't exist in localStorage and store it
          if (!localStorage.getItem(fileName.replace(".json", ""))) {
            localStorage.setItem(fileName.replace(".json", ""), JSON.stringify(data));
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    });
  }
  