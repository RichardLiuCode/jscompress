export function compressJS(inputCode) {
    inputCode = inputCode.toString()
    while (inputCode.includes("  ")) {
        inputCode = inputCode.replace("  ", " ")
    }
    while (inputCode.includes("\n\n")) {
        inputCode = inputCode.replace("\n\n", "\n")
    }

    // {
    while (inputCode.includes("{ ")) {
        inputCode = inputCode.replace("{ ", "{")
    }
    while (inputCode.includes(" {")) {
        inputCode = inputCode.replace(" {", "{")
    }

    // }
    while (inputCode.includes("} ")) {
        inputCode = inputCode.replace("} ", "}")
    }
    while (inputCode.includes(" }")) {
        inputCode = inputCode.replace(" }", "}")
    }

    //+
    while (inputCode.includes("+ ")) {
        inputCode = inputCode.replace("+ ", "+")
    }
    while (inputCode.includes(" +")) {
        inputCode = inputCode.replace(" +", "+")
    }

    // -
    while (inputCode.includes("- ")) {
        inputCode = inputCode.replace("- ", "-")
    }
    while (inputCode.includes(" -")) {
        inputCode = inputCode.replace(" -", "-")
    }

    // =
    while (inputCode.includes("= ")) {
        inputCode = inputCode.replace("= ", "=")
    }
    while (inputCode.includes(" =")) {
        inputCode = inputCode.replace(" =", "=")
    }
    inputCode = inputCode.split("\n");
    for (let i = 0; i < inputCode.length; i = i + 1) {
        if (inputCode[i].substring(inputCode[i].length - 1) == "\"") {
            inputCode[i] = inputCode[i] + ";"
        } else if (inputCode[i].substring(inputCode[i].length - 1) == ")") {
            if (inputCode[i].substring(0, 1) != ".") {
                inputCode[i] = inputCode[i] + ";"
            }
        }
        if (inputCode[i].includes("//") && !(inputCode[i].includes("://"))) {
            inputCode[i] = inputCode[i].replace("//", "/*");
            inputCode[i] = inputCode[i] + "*/"
        }
        console.log(inputCode[i].substring(inputCode[i].length - 1));
    }
    inputCode = inputCode.join("");

    while (inputCode.includes("; ")) {
        inputCode = inputCode.replace("; ", ";")
    }

    // solve problem like function().then()
    while (inputCode.includes(";.")) {
        inputCode = inputCode.replace(";.", ".")
    }

    while (inputCode.includes(";)")) {
        inputCode = inputCode.replace(";)", ")")
    }

    return inputCode
}