// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


function longestCommonPrefix(strs: string[]): string {
    let prefix: string;

 prefix =   strs.reduce((acc, item) => {
        let i: number = 0;
        while (
            i <= acc.length && i <= item.length && acc[i] == item[i]
        ) {
            i++
        }
        if (i > 0) {
           return acc.slice(0, i)
        } else {
            return "";
        }


       
    })
    return prefix;
};



