for (x of arr) {
    for (y of a) {
        if (x.day == a.day) {
            a.data.push([])
            break
        }
        a.push({
            day: x.day,
            data: []
        })
    }
}