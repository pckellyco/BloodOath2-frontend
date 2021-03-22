//* PUT YOUR CODE IN HERE

// console.log('Anything') // first step always: console.log something into this file to make sure it's connected

// fetch(baseURL) // default is always get unless you use fetch with options which will change HTTP verb
//   .then((response) => response.json()) // parsing json - so it takes the API/baseURL and it parses file into .json so we can use it in javascript
//   .then((cult) => {
//     cultName.textContent = cult.name; //innerText ignores all styling,
//     cultImage.src = cult.img_url;
//     cultCounter.textContent = cult.count;
//     cultCounterButton.addEventListener("click", () => {
//       cult.count++;
//       cultCounter.textContent = cult.count;
//       // //cultCounter.textCounter = cult.count++ it will stringify because it
//       fetch(baseURL, {
//         // fetch with options, adding this line to update the backend. so the count is not reset everytime we refresh
//         method: "PATCH", // passing url & all of the data we are sending to the url, object of arg that will fulfill fetch
//         headers: {
//           // memorize headers tell the fetch req what data it is getting and receiving - 'metadata' for fetch req
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           // body has to be wrapped in a ()
//           count: cult.count, //argument of things we want to change, connecting backend
//         }),
//         //CRUD actions (create, read, update, destroy)
//         // 4 methods/verbs post = create, patch & put = update, delete = delete, get = show backend, every fetch req is a get
//       });
//     });

//     commentForm.addEventListener("submit", (event) => {
//       // form is set to default post, submit is default to submit
//       event.preventDefault(); //prevent default is used with submit since there is
//       console.log(event);
//       const commentItem = document.createElement("li");
//       const formData = new FormData(event.target); //always need to call new then FormData new is a built in method essentially tells the form that this is the data we need
//       commentItem.textContent = formData.get("comment"); //name attribute
//       commentList.append(commentItem);
//     });
//   });

// //event.target is what element is this event running on, event is what is happening, event is an object in this case
// // accessing key value pair thing your adding to event
// // in this case the form is looking for event and the

// // later use another fetch with options cult_id:cult.id // creates a new cult id on the backend

// json-server --watch db.json

const baseURL = "http://localhost:3000/cults/1"; // when creating show page add the url/1, 1 is the id pulling from database
const cultName = document.querySelector(".title"); // declare const outside functions allows to use anywhere later
const cultImage = document.querySelector(".image");
const cultCounter = document.querySelector(".bloodoaths");
const cultCounterButton = document.querySelector(".bloodoath-button");
const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comments");

fetch(baseURL)
    .then ((response) => response.json) //transforming response from baseURL to json 
    .then ((cultCard) => {
        cultName.textContent = cult.name;
        cultImage.src = cult.img_url;
        cultCounter.textContent = cult.count;
        

    })
    
