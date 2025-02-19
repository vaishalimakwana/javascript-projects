let fruits = ['Apple', 'Kiwi', 'Mango'];

const animateOne = (fruit, animate) => {
	return new Promise((res,ref) => {
		setTimeout(() => {
			animate(fruit);
			res(true);
		}, 1000);
	});
}

const animateAll = (animate) => {
	animateOne(fruits[0], animate)
	.then(() => animateOne(fruits[1], animate))
	.then(() => animateOne(fruits[2], animate))
	.catch((err) => console.log("some error has occured", err));
}

const animate = (fruit) => {
	console.log("Animating", fruit);
};

animateAll(animate);

// 1
const myPromise2 = () => Promise.resolve('I have resolved!');

async function secondFunction(){
	setTimeout(() => {
	 console.log('timeout');

	},1000);
	console.log(await myPromise2());
	console.log('second');
}

secondFunction();


// 2
console.log('start');

setTimeout(() => {

	console.log('Timeout');
},0);

const promise = new Promise((resolve, reject) => {
	console.log('Promise');

})
console.log('end');


// 3
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// 4
console.log('start');

const promise = new Promise((resolve,reject) => {

	console.log('In Promise');
	resolve('In Promise resolve 1')
})
promise.then(res => {
	console.log(res);
})

console.log('end');

// 5
console.log('start');

const promise = new Promise((resolve,reject) => {

	console.log('In Promise 1');
	resolve('In Promise resolve 2')
	console.log('In Promise 3')

})
promise.then(res =>{

console.log(res);
})

console.log('end');

// 6
console.log('start');
const promise1 = new Promise((resolve, reject) => {

	console.log('In Promise 1');
	//resolve(); If resolve is uncommented the below statement will execute
})
promise1.then(res => {
	console.log('In promise 2'); // Promise is not getting resolved, hence it will not be executed
})
console.log('end');

// 7 Function expression
console.log('start');
const fn = () => (new Promise((resolve,reject) => {
	console.log('In promise 1');
	resolve('success');
}))

console.log('middle');
fn().then(res => {
	console.log(res);
})

console.log('end');

// 8
console.log('start');
const promise1 = (new Promise((resolve,reject) => {
	console.log('In promise 1');
	resolve('success');
}))

console.log('middle');
promise1.then(res => {
	console.log(res);
})

console.log('end');

// 9
console.log('start');
Promise.resolve('In Promise 1').then((res) => {
 console.log(res)
})
Promise.resolve('In Promise 2').then((res) => {
 console.log(res)
})
console.log('end')