console.log("yeye")
const curr=window.location.href;
const page=curr.split("?")[1]
console.log("yee")
if (page==="region") {
  console.log("ye")
  fetch("https://ipapi.co/json/")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error: ' + error.message);
    });
}
