


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
//=====================================================

document.addEventListener("DOMContentLoaded", function() {
    function displayStoredData(){
        const displayElement=document.getElementById("displayData");
        //displayElement.innerHTML="";
    
        for(let i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            if(key.startsWith("formData_")){
                const storedDataJSON= localStorage.getItem(key);
                if(storedDataJSON){
                    const storedData=JSON.parse(storedDataJSON);
                    const userDataDiv=document.createElement("li");
                    userDataDiv.innerHTML=`Name:${storedData.name} Email: ${storedData.email}  Phone: ${storedData.phone} Date: ${storedData.date} Time: ${storedData.time}<br>`;
                    displayElement.appendChild(userDataDiv);
                }
            }
        }
    }
    
    //========================================================    
    const date=new Date();
    let form=document.getElementById("myForm");
    
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let phone=document.getElementById("Phone").value;
        let date=document.getElementById("date").value;
        let time=document.getElementById("time").value;
    
        let formData={
            name:name,
            email:email,
            phone:phone,
            date:date,
            time:time
        };
    
        let formDataJSON= JSON.stringify(formData);
        let unquieKey=Date.now().toString();
    
        localStorage.setItem(`formData_${unquieKey}`,formDataJSON);
    
        console.log(localStorage.getItem("formData"));
        // displayStoredData();
    });
    
    displayStoredData();
});



