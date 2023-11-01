
const date=new Date();

document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();
    console.log("Name: "+ document.getElementById('name').value);
    console.log("Email: "+ document.getElementById('email').value);
    console.log("Phone: "+ document.getElementById('Phone').value);
    console.log("Date: "+ document.getElementById('date').value);
    console.log("Time: "+ document.getElementById('time').value);
})
  