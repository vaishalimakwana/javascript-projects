const a = [1,2,3] // Output [1,2,3,1,2,3]
//const b =[...a,...a];
//a.push.call(a,...a);
a.push.apply(a,a);
console.log(a);

// 2 - Using method chargeBattery for participant1 to participant2
let participant1 = {
	name: 'Lily',
 	battery: 70,
	chargeBattery: function(){
		this.battery = 100;
	}
}

let participant2 = {
	name: 'John',
  battery: 30

}
participant1.chargeBattery();

participant1.chargeBattery.call(participant2);
console.log(participant1.battery);
console.log(participant2.battery);