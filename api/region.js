console.log("yeye")
const curr=window.location.href;
const show=document.getElementById("ye")
const page=curr.split("?")[1]
console.log("yee")
if (page==="region") {
  console.log("ye")
  fetch("https://ipapi.co/json/")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log("na")
      console.log("na")
      return response.json();
    })
    .then(data => {
      const json=JSON.stringify(data,null,2);
      show.textContent=json;
      console.log(data);
    })
    .catch(error => {
      console.error('Error: ' + error.message);
    });
}
