const names = ['abul', 'babul', 'kabul', 'dabul', 'gabul', 'babul', 'kabul'];

function removeDuplicate(names) {
    const unique = [];

    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }


    }
    return unique;

}
console.log(removeDuplicate(names));