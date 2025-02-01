// 1.

(function(){
	var a = b = 3;
})();


console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// 2.

var myObject = {

	foo: "bar",
	func: function (){
	var self = this;
	console.log("Outer func: this.foo = " + this.foo);
	console.log("Outer func: self.foo = " + self.foo);
        (function(){
		console.log("Inner func: this.foo = " + this.foo);
		console.log("Inner func: self.foo = " + self.foo);
	}());
	}
};

myObject.func();

// 3
for (var i = 0; i < 5 ; i++){
	var btn = document.createElement('Button');
	btn.appendChild(document.createTextNode('Button' + i));
	btn.addEventListener('click', function(){console.log(i);});
	document.body.appendChild(btn);
}

// 4
for (let i = 0; i < 5 ; i++){
	var btn = document.createElement('Button');
	btn.appendChild(document.createTextNode('Button' + i));
	btn.addEventListener('click', function(){console.log(i);});
	document.body.appendChild(btn);
}
// 5
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
    })(i));
    document.body.appendChild(btn);
    }

// 6
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log('Arr1', arr1);
console.log('Arr2', arr2);
console.log('Arr3', arr3);
console.log("Arr 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("Arr 2: length=" + arr2.length + " last=" + arr2.slice(-1));