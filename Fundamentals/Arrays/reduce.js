const emps = [
    { name: 'Alice', dept: 'HR', sal: 20000 },
    { name: 'Bob', dept: 'Engg', sal: 50000 },
    { name: 'Charlie', dept: 'HR', sal: 20000 }
  ];
  
  const groupByDept = emps.reduce((acc, emp) => {
    acc[emp.dept] = acc[emp.dept] || []; // If dept key doesn't exist, create an empty array
    acc[emp.dept].push(emp.name); // Push employee name into the department array
    return acc; // Return updated accumulator
}, {}); // <-- This is the initial value (empty object)

  console.log(groupByDept);
// reduce() does not always have to return a single primitive value—it can return objects, arrays, or any accumulated structure.
// In your string concatenation example, reduce() converts an array into a single string.
// In the HR department example, reduce() groups elements into an object.