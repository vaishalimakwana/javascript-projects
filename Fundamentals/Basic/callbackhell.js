let fruits = ['Apple', 'Mango', 'Cherry'];

const animateAll = (animate) => {
	// below is the callback hell
	setTimeout(() => {
		animate(fruits[0]);
		setTimeout(() => {
			animate(fruits[1]);
			setTimeout(() => {
				animate(fruits[2]);
			},1000);
			
		}, 1000);
		
	}, 1000);


};

const animate = (fruit) => {
	console.log("Animating", fruit);
};

animateAll(animate);

