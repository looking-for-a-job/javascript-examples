arr = ["value1","value2",42]

pos = arr.indexOf("value2")
console.log(pos);

if(arr.indexOf("value1") !== -1) {
    console.log("Value exists!")
} else {
    console.log("Value does not exists!")
}
