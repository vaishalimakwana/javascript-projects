const user = {
	firstName: "Vaishali",
	getName(){
	const firstName = "Vaishali M";
	return this.firstName;
	},
};

console.log(user.getName()); // Output 
// This is pointing to user and not const firstName