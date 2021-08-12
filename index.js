const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const title = tutorials.map(function (name) {
    const words = name.split(' ');
    console.log(words)
    const combine = words.map(word => word[0].toUpperCase() + word.slice(1));
    const cased = combine.join(' ');
    return cased;
  });
  return title
}
console.log(titleCased());


/////////////////////////////////////////////////////////////////
// let arrayToLongString = tutorials.toString()  // Array => One Long String
// // console.log(arrayToLongString)
// let singleWordsArray = arrayToLongString.split(' ') // String => Array of Individual words 
// // console.log(singleWordsArray)


// const titleCased = singleWordsArray.map(x => x.substring(0, 1) + x.toUpperCase())
// console.log(titleCased)
