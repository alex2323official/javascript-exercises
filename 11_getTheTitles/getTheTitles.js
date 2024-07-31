const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arrayOfBooks) {
  let value = arrayOfBooks.map((item, i, arr) => {
    return item.title;
  });
  return value;
};

// Your job is to write a function that takes the array and returns an array of titles:

console.log(getTheTitles(books)); // ['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;
