function Block1(){
    const arr = ['Tom','Nick','Jack','Bill',[ 'Name: Bill', 'Name: Jack']];
    
    const newArr = [...arr];
    arr[4][0] = 'Name: New name';
    arr[1] = 'Neel';

    console.log('This is arr', arr);
    console.log('This is newArr', newArr);
    
    const deepCopy = JSON.parse(JSON.stringify(arr));
    console.log('This is a Deep Copy', deepCopy);


    }
    
    Block1();

// ✅ Shallow copy (...) is fine for flat objects but fails for nested structures.
// ✅ Deep copy ensures full independence, so changes to the new object do not affect the original.
// ✅ Use structuredClone() for deep copying (modern browsers support it).


// Block2 - Deep Copy
function Block2(){
    const arr = ['Tom','Nick','Jack','Bill',[ 'Name: Bill', 'Name: Jack']];
    
    
    const deepCopy = JSON.parse(JSON.stringify(arr));
     
     arr[2] = 'Changing after Deep Copy created';
     console.log('Arr [2] changed', arr);
     console.log('This is a Deep Copy', deepCopy);
    }
    
    Block2();