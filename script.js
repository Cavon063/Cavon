// Make sure to Understand lines 18-26
        const outputspace = document.getElementById("outputspace");      



/*if statement means that if there is nothing in the input box then the alert will pop up. 
then in the else statement li is to reference the list in html even though it is a comment in the 
html. Then li.innerHTML = inputbox.value means li is calling the list to be used everytime you enter
something in the inputbox. Lastly, we use list container so it will retuen th list in the right place.
*/

       
// Assuming inputbox is the input element where users enter their tasks
const inputbox = document.getElementById("inputbox");

// Assuming listcontainer is the container where you want to display the tasks
const listcontainer = document.getElementById("listcontainer");

// Assuming addtask is the button element that triggers the task addition
const addtask = document.getElementById("addtask");

addtask.onclick = function (event) {
    if (inputbox.value === '') {
        alert('Get your lazy ass out of bed and complete your tasks!!');
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        // Append the list item to the container
        listcontainer.appendChild(li);

        // Store the task in local storage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(inputbox.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Clear the input box for the next task
        inputbox.value = '';
    }
}

 


