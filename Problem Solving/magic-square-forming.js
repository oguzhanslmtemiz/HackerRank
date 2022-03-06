function formingMagicSquare(s) {
    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ]
    let minCost = Infinity
    magicSquares.forEach(magicSquare => {
        let currCost = 0
        for (let row = 0; row < magicSquare.length; row++) {
            for (let col = 0; col < magicSquare[row].length; col++) {
                currCost += Math.abs(s[row][col] - magicSquare[row][col])
            }
        }
        if (currCost < minCost) minCost = currCost
    })
    return minCost
}
