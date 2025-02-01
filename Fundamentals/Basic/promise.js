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