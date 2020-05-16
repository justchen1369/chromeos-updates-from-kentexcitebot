const rs = require("readline-sync");
const validFilename = require('valid-filename');
const fs = require("fs");

const blogPostPath = "./content/blog/"


//validate blogPostPath
if (!fs.existsSync(blogPostPath)) {
    throw new Error("BlogPostPath is not a valid directory. ")
} else if (!blogPostPath.endsWith("/")) {
    throw new Error('blogPostPath must end with a slash ("/")')
}

let folderName;
//determine and validate what folder the new blog post will be in
(() => {
    let answered = false;

    while (!answered) {

        answered = true

        const answer = rs.question(
            "what would you like the name of the blogpost folder to be? "
        );

        if (!validFilename(answer)) {
            console.log("that is not a valid filename, please try again. ");

            answered = false;
            continue;
        } else if (fs.existsSync(blogPostPath + answer)) {
            console.log("that folder already exists, please try again.");

            answered = false;
            continue;
        } else {
            folderName = answer;
        }

    }
})();

//ask for a title

const title = rs.question("what will the title be?");

//TODO later