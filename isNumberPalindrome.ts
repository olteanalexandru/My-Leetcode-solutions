function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x.toString() !== x.toString().split("").reverse().join("")) {
        return false;
    } else  return true;
}