const pdf = require("html-pdf");
const ejs = require("ejs");

// const data = {
//   name: "Daniel",
//   stack: "Web developer",
// };

ejs.renderFile(
  "./myFile.ejs",
  //   {
  //     name: data.name,
  //     stack: data.stack,
  //   },
  (err, html) => {
    if (err) {
      console.log(err);
      return;
    }
    pdf.create(html, {}).toFile("./result.pdf", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
);
