


// This is the naive way that comes first to mind
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2)

// This is the method with the Hash Table
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        }else{
            map[input[i]] = i;
        }
    }
    return undefined;
}// O(n)


//The first implementation with this [2,1,1,2,3,5,1,2,4] gives a wrong answer but the one using hash tables is optimazed
firstRecurringCharacter([1, 2, 13, 8, 45, 97, 8]);