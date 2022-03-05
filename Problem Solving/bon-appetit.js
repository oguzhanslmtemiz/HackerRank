function bonAppetit(bill, k, b) {
    const costOfAnna = (bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
    console.log(costOfAnna === b ? 'Bon Appetit' : b - costOfAnna)
}
