// 1. What is the fetch() API in JavaScript?

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error fetching data:',error))

// 2. How do you use async/await with fetch()?
// Instead of using .then(), you can use async/await for better readability.
async function fetchData(){
	try{
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log(data);

	} catch(error){
	console.log('Error fetching data:', error);
	}
}

fetchData();

// 3. How do you handle errors in fetch()?
// Use try...catch for network errors and check response.ok for API errors.
async function fetchData() {

	try {
	  const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
   
	if(!response.ok){
		throw new Error(`HTTP error! Status: ${response.status}`);
	  }
    // ✅ Why use response.ok?
   // It prevents errors from going unnoticed when the request succeeds 
   // but returns a bad status (e.g., 404, 500).
	  const data = await response.json();
	  console.log(data);
   
	 } catch(error){
	   console.error('Fetch error:',error.message);
	 }
   
   }
   
   fetchData();

   // 4. How do you make a POST request using fetch()?
   async function createPost() {

	const newPost = {
	   title: 'New Post',
	   body: 'This is a new post.',
	   userId: 1,
	
	   };
	
	try {
	  const response = await fetch('https://jsonplaceholder.typicode.com/posts',
			{
			method: 'POST',
			headers: {
			 'Content-Type': 'application/json',
			},
			 body: JSON.stringify(newPost),
			}); 
	
	   const data = await response.json();
	   console.log('Post Created:', data);
	
	 } catch(error){
		 console.error('Error creating post:', error);
	   }
	
	}
	
	createPost();

// 5. What is the difference between fetch() and axios?

// ✅ Why use Axios? Handles JSON automatically
// Supports request cancellation and timeouts
// https://unpkg.com/axios/dist/axios.min.js
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => console.log(response.data))
.catch((error) => console.error('Error fetching data:',error));

// 6. How do you handle timeouts with fetch()?
// ✅ Why use AbortController?
// It cancels the request after a specified timeout.

async function fetchDataWithTimeout(url, timeout = 5000){

	const controller = new AbortController();
	const signal = controller.signal;
	
	setTimeout(() => controller.abort(), timeout);
	
	
	try{
		const response = await fetch(url, {signal});
		const data = await response.json();
		console.log(data);
	
	} catch(error){
		console.error('Fetch Timeout/Error:', error.message);
	}
	
	
	
	}
	
	
fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts', 3000);

// 7. How do you fetch multiple API requests simultaneously?
async function fetchMultiple(){
	try{
	 const [posts, users] = await Promise.all([
	  fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()),
 	fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()),
	]);

	 console.log('Posts', posts);
	 console.log('Users', users);

	} catch (err){

	console.error('Error fetching data', err);
	}

}

fetchMultiple();

   
