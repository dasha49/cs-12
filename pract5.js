const array = ["Hello World"];
const golosni = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowels(arr) 
{
    const str = arr.join(''); 
    let counter = 0; 
    for (let i = 0; i < str.length; i++) {
        if (golosni.includes(str[i])) {  
            counter += 1;
        }
    }
    return counter;
}
const result1 = countVowels(array);
console.log(result1);





function secondLargest(arr)
{
    const str = arr.sort();
    return arr[arr.length - 2];
    
}
const result2 = secondLargest([10, 40, 30, 20, 50])
console.log(result2)





function isAnagram(arr1,arr2)
{
    if (arr1.split("").sort().join() == arr2.split("").sort().join())
    {
        console.log("Is Anagram)");
    }
    else
    {
        console.log("Is not Anagram");
        
    }   
}
isAnagram("listen", "silent"); // true
isAnagram("listen2", "silent"); // false




function twoSum(arr,target)
{
  for(let a = 0; a < arr.length; a++)
    {
        index = a;
        for(let b = 1; b<arr.length; b++)
        {
            if (arr[a] + arr[b] == target) 
                {
                console.log("Indexes: ["+ a + "],[" + b + "]");
                }
        }  
    }
}
const result3 = twoSum(([10, 40, 30, 20, 50]), 70);
console.log(result3);





function isPalindrome(string)
{
    const reversed_str = string.split("").reverse().join("");
    if(string  == reversed_str)
    {
        console.log("Is palindrome");
    }
    else
    {
        console.log("Is not palindrome");
    }
}
isPalindrome("racecar");
isPalindrome("hello");

















