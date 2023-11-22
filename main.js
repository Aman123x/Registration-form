
document.addEventListener("DOMContentLoaded", function () {
    function displayStoredData(storedData) {
        const displayElement = document.getElementById("displayData");

        // Create list item to display stored data
        const listItem = document.createElement("li");

        // Create a container for the "Edit" and "Delete" buttons, and data elements
        const container = document.createElement("div");

        // Create an "Edit" button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.color = "blue";

        // Add a click event listener to the "Edit" button
        editButton.addEventListener("click", function () {
            // Copy data to input fields
            document.getElementById("name").value = storedData.name;
            document.getElementById("email").value = storedData.email;
            document.getElementById("Phone").value = storedData.phone;
            document.getElementById("date").value = storedData.date;
            document.getElementById("time").value = storedData.time;

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
        deleteButton.addEventListener("click", function () {
            // Call a function to delete data from the database
            deleteDataFromDatabase(storedData._id);

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
    }

    function deleteDataFromDatabase(id) {
        // Make a DELETE request to the server to delete data with the specified _id
        axios.delete(`https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData/${id}`)
            .then((response) => {
                console.log("Data deleted successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Fetch and display existing data when the page loads
    axios.get("https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                const storedData = response.data[i];
                displayStoredData(storedData);
            }
        })
        .catch((err) => {
            console.log(err);
        });

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("Phone").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        let formData = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time
        };

        axios.post("https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData", formData)
            .then((response) => {
                const storedData = response.data;
                displayStoredData(storedData);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});


//==========================================================================================

// document.addEventListener("DOMContentLoaded", function () {
//     function displayStoredData(storedData) {
//         const displayElement = document.getElementById("displayData");

//         // Create list item to display stored data
//         const listItem = document.createElement("li");

//         // Create a container for the "Edit" and "Delete" buttons, and data elements
//         const container = document.createElement("div");

//         // Create an "Edit" button
//         const editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.style.color = "blue";

//         // Add a click event listener to the "Edit" button
//         editButton.addEventListener("click", function () {
//             // Copy data to input fields
//             document.getElementById("name").value = storedData.name;
//             document.getElementById("email").value = storedData.email;
//             document.getElementById("Phone").value = storedData.phone;
//             document.getElementById("date").value = storedData.date;
//             document.getElementById("time").value = storedData.time;

//             // Remove the list item from the display
//             listItem.remove();
//         });

//         // Append the "Edit" button to the container
//         container.appendChild(editButton);

//         // Create a "Delete" button
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.style.color = "red";

//         // Add a click event listener to the "Delete" button
//         deleteButton.addEventListener("click", function () {
//             // Remove the list item from the display
//             deleteDataFromDatabase(storedData._id);
//             listItem.remove();
//         });

//         // Append the "Delete" button to the container
//         container.appendChild(deleteButton);

//         // Create and append data elements to the container
//         const dataElements = document.createElement("div");
//         dataElements.innerHTML = `Name: ${storedData.name}, Email: ${storedData.email}, Phone: ${storedData.phone}, Date: ${storedData.date}, Time: ${storedData.time}`;

//         // Append the data elements to the container
//         container.appendChild(dataElements);

//         // Append the container to the list item
//         listItem.appendChild(container);

//         // Append the list item to the display area
//         displayElement.appendChild(listItem);
//     }

//     function deleteDataFromDatabase(id) {
//         // Make a DELETE request to the server to delete data with the specified key
//         axios.delete(`https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData/${id}`)
//             .then((response) => {
//                 console.log("Data deleted successfully");
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     const form = document.getElementById("myForm");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         let name = document.getElementById("name").value;
//         let email = document.getElementById("email").value;
//         let phone = document.getElementById("Phone").value;
//         let date = document.getElementById("date").value;
//         let time = document.getElementById("time").value;

//         let formData = {
//             name: name,
//             email: email,
//             phone: phone,
//             date: date,
//             time: time
//         };

//         axios.get("https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData")
//         .then((response)=>{
//             //console.log(response.data);
//             for(let i=0;i<response.data.length;i++){
//                 const storedData = response.data[i];
//                 displayStoredData(storedData);
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         });

//         axios.post("https://crudcrud.com/api/5a3340ffeff9480e983d9e4dc37a3fc1/appointmentData", formData)
//             .then((response) => {
//                 // const storedData = response.data;
//                 // displayStoredData(storedData);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     });
// });
