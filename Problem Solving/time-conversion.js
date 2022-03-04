function timeConversion(s) {
    const amorpm = s.slice(-2)
    let hh = s.slice(0, 2)
    const mmss = s.slice(2, -2)

    if (amorpm === 'AM' && hh == 12) {
        hh = '00'
    } else if (amorpm === 'PM' && hh != 12) {
        hh = parseInt(hh) + 12
    }
    return hh + mmss
}
