// Write a JavaScript function to extract unique characters from a string. 
// Example : str= “abcdabcdefgggh” 
// ans = “abcdefgh"


function unique(str) {
    let ans = "";
    for(let i = 0;i < str.length;i++) {
        let currchar = str[i];
        if(ans.indexOf(currchar) == -1) {
            ans += currchar;
        }
    }
    return ans;
}


let str = "abcdabcdefgggh";
let ans = unique(str);
console.log(ans)