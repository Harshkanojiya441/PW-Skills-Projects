var arr = ["Orange", "Apples", "Grapes", "Banana", "Orange", "Grapes"];

//By Arrow
function removeDuplicates() {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

//By set
function removeDuplicates1() {
    return [...new Set(arr)];
}
console.log(removeDuplicates1(arr));