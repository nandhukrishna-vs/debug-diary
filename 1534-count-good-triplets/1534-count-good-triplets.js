/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            // Check the first condition
            if (Math.abs(arr[i] - arr[j]) > a) {
                continue;
            }

            for (let k = j + 1; k < arr.length; k++) {
                // Check the second and third conditions
                if (
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) {
                    count++;
                }
            }
        }
    }

    return count;
};
