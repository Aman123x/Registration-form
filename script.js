


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

                        // Create list item to display stored data
                        const listItem = document.createElement("li");

                        // Create a container for the "Edit" and "Delete" buttons, and data elements
                        const container = document.createElement("div");
    
                        // Create an "Edit" button
                        const editButton = document.createElement("button");
                        editButton.textContent = "Edit";
                        editButton.style.color = "blue";
    
                        // Add a click event listener to the "Edit" button
                        editButton.addEventListener("click", function() {
                            // Copy data to input fields
                            document.getElementById("name").value = storedData.name;
                            document.getElementById("email").value = storedData.email;
                            document.getElementById("Phone").value = storedData.phone;
                            document.getElementById("date").value = storedData.date;
                            document.getElementById("time").value = storedData.time;
    
                            // Remove the data from local storage
                            localStorage.removeItem(key);
    
                            // Remove the list item from the display
                            listItem.remove();
                        });
    
                        // Append the "Edit" button to the container
                        container.appendChild(editButton);
    
                        // Create a "Delete" button
                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "Delete";
                        deleteButton.style.color = "red";
    
                        // Add a click event listener to the "Delete" button
                        deleteButton.addEventListener("click", function() {
                            // Remove the data from local storage
                            localStorage.removeItem(key);
    
                            // Remove the list item from the display
                            listItem.remove();
                        });
    
                        // Append the "Delete" button to the container
                        container.appendChild(deleteButton);
    
                        // Create and append data elements to the container
                        const dataElements = document.createElement("div");
                        dataElements.innerHTML = `Name: ${storedData.name}, Email: ${storedData.email}, Phone: ${storedData.phone}, Date: ${storedData.date}, Time: ${storedData.time}`;
    
                        // Append the data elements to the container
                        container.appendChild(dataElements);
    
                        // Append the container to the list item
                        listItem.appendChild(container);
    
                        // Append the list item to the display area
                        displayElement.appendChild(listItem);
                    // // const userDataDiv=document.createElement("li");
                    
                    // // const deleteButton = document.createElement("input");
                    // // deleteButton.type = "button";
                    // // deleteButton.value = "Delete";
                    // // deleteButton.style.backgroundColor="red";

                    // // Create a container for data and the "Delete" button
                    // const dataContainer = document.createElement("div");

                    // // Create a "Delete" button
                    // const deleteButton = document.createElement("input");
                    // deleteButton.type = "button";
                    // deleteButton.value = "Delete";
                    // deleteButton.style.backgroundColor = "red";

                    //  // Append the "Delete" button to the data container
                    //  dataContainer.appendChild(deleteButton);

                    //  // Create and append data elements to the data container
                    //  const dataElements = document.createElement("div");

                    //  // Append the data elements to the data container
                    // dataContainer.appendChild(dataElements);

                    // // Append the data container to the list item
                    // userDataDiv.appendChild(dataContainer);

                    // displayElement.appendChild(userDataDiv);

                    // userDataDiv.innerHTML=`Name:${storedData.name} Email: ${storedData.email}  Phone: ${storedData.phone} Date: ${storedData.date} Time: ${storedData.time}`;
                    // displayElement.appendChild(userDataDiv);
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



