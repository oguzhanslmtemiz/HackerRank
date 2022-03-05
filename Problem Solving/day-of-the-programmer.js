function dayOfProgrammer(year) {
    if (year == 1918) return "26.09.1918"
    const isLeap = year > 1918 &&
        ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        ? true : year < 1918 && year % 4 === 0 ? true : false
    return isLeap ? `12.09.${year}` : `13.09.${year}`
}
