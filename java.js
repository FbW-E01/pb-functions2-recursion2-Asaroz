const string = "hello world"
console.log(reverse(string))

function reverse(string, helper = "") {
    if (string.length === 0) {
        return helper
    }
    [current, ...rest] = string
    helper = current + helper
    return reverse(rest, helper)
}