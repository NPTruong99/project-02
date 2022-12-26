function run(object) {
    let output = [];
    for (let key in object) {
        output.push("Thuộc tính " + key + " có giá trị " + object[key]);
        // output.push(Thuộc tính ${key} có giá trị ${object[key]})
    }

    return output;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
