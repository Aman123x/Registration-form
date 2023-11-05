


document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();
    console.log("Name: "+ document.getElementById('name').value);
    console.log("Email: "+ document.getElementById('email').value);
    console.log("Phone: "+ document.getElementById('Phone').value);
    console.log("Date: "+ document.getElementById('date').value);
    console.log("Time: "+ document.getElementById('time').value);
});
    
    // Local Storage in JavaScript -->
    
    // localStorage.setItem("key","value");
    // localStorage.getItem("key");
    // localStorage.removeItem("name");
const date=new Date();
let form=document.getElementById("myForm");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let text=document.getElementById("Phone").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("time").value;

    let formData={
        name:name,
        email:email,
        text:text,
        date:date,
        time:time
    };

    let formDataJSON= JSON.stringify(formData);

    localStorage.setItem("formData",formDataJSON);

    console.log(localStorage.getItem("formData"));
});