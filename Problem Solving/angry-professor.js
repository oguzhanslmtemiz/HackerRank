function angryProfessor(k, a) {
    let countOfArrivals = 0
    a.forEach(arrivalTime => {
        if (arrivalTime <= 0) countOfArrivals++
    })
    return countOfArrivals >= k ? 'NO' : 'YES'
}
