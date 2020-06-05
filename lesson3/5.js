function line(char, count) {
    let line = "";
    for (let i = 0; i < count; i++) {
        line += char;
    }

    return line;
}

function printPyramid(rowCount) {
    for (let i = 1; i < rowCount; i++) {
        console.log(line("X", i));
    }
}

printPyramid(20);
