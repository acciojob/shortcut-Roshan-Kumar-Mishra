// function shortcut(s1, s2) {
//   // your code here
// }

// // Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));
function shortcut(str1, str2) {
    // Check if either string is empty
    if (!str1 || !str2) {
        return "";
    }

    // Return the initial letters of the strings
    return str1[0] + str2[0];
}

// Example usage:
// const string1 = "hello";
// const string2 = "world";
const result = shortcut(string1, string2);
console.log(result);

