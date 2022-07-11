// 1) Sum Zero:  Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise

let sample1 = []
let sample2 = [1]
let sample3 = [1, 2, 3]
let sample4 = [1, 2, 3, -2]

function addToZero(array){
    let value = false
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (i !== j){
                if (array[i] + array[j] === 0){
                    value = true
                }
            } 
            
        }
    }
    return value
}

// console.log(addToZero(sample1))
// console.log(addToZero(sample2))
// console.log(addToZero(sample3))
// console.log(addToZero(sample4))

// this is o(n^2)

// 2) Unique Characters: Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}


// console.log(hasUniqueChars("moonday"))
// console.log(hasUniqueChars("monday"))

// this is O(n)

// 3) Pangram Sentence: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

function isPangram(string){
    
    let letters = string.toLowerCase().match(/[a-z]/g);
    
    let alphabet = [...new Set(letters)]
    
    return alphabet.length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// this is O(n)

// 4) Longest Word: Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr){
    let max = 0 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max ){
            max = arr[i].length 
        }
    }
    return max
}

console.log(findLongestWord(["hi", "hello"]))

// this is O(n)