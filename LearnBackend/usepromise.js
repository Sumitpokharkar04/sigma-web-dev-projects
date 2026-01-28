import fs from "fs";

fs.readFile("harry.txt", (error, data) => {
    if (error) {
        console.error("Error reading file:", error);
        return;
    }
    console.log(data.toString());

    // Append text after reading
    fs.appendFile("harry.txt", "\nkaise ho bhai", (err) => {
        if (err) console.error("Error appending:", err);
        else console.log("Append successful");
    });
});

let z = 2;
console.log(z);

