class CustomArray extends Array {
    sum() {
        return this.reduce((acc, val) => acc + val, 0);
    }
}

let arr = new CustomArray(1, 2, 3);
console.log(arr.sum()); // 6
