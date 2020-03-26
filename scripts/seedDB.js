const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["Douglas Adams"],
    description: "Seconds before the Earth is demolished for a galactic freeway, Arthur Dent is saved by Ford Prefect, a researcher for the revised Guide. Together they stick out their thumbs to the stars and begin a wild journey through time and space.",
    image: "https://books.google.com/books/content/images/frontcover/mO-62VxpLe0C?fife=w200-h300",
    link: "https://play.google.com/store/books/details/Douglas_Adams_The_Ultimate_Hitchhiker_s_Guide_to_t?id=mO-62VxpLe0C",
    title: "The Ultimate Hitchhiker's Guide to the Galaxy",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });