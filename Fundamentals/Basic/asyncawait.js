let fruits = ['Apple', 'Mango', 'Kiwi'];

const animateOne = (fruit, animate) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			animate(fruit);
			res(true);
		},1000);
	});
}

const animateAll = async(animate) => {
	await animateOne(fruits[0], animate);
	await animateOne(fruits[1], animate);
	await animateOne(fruits[2], animate);
};

const animate = (fruit) => {
	console.log("animating", fruit);
};

animateAll(animate);