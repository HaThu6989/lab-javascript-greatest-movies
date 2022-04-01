// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(someArray) {
  let newArray = someArray.map(element => element.director)
  return newArray
}
// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someArray) {
  let count = 0
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i].director === 'Steven Spielberg') {
      let lengthGenre = someArray[i].genre
      for (let j = 0; j < lengthGenre.length; j++) {
        if (lengthGenre[j] === 'Drama') {
          count++
        }
      }
    }
  }
  return count
}
// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArray) {
  if (someArray.length === 0) {
    return 0;
  }
  let average = someArray.reduce(function (accumulator, currentValue) {
    let totalScore = accumulator + currentValue.score
    return totalScore
  }, 0)
  let lengthArr = someArray.length
  average = average / lengthArr
  return parseFloat(average.toFixed(2))
}
// console.log(scoresAverage(testArr))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArray) {
  let newArray = []
  let total = 0

  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i].genre.length === 1) {
      let lengthGenre = someArray[i].genre
      for (let j = 0; j < lengthGenre.length; j++) {
        if (lengthGenre[j] === 'Drama' && lengthGenre.length === 1) {
          newArray.push(someArray[i].score)
        } else if (lengthGenre[j] !== 'Drama') {
          return 0
        }
      }
    }
  }

  newArray.forEach(function (element) {
    total = total + element
  })

  total = total / newArray.length
  return parseFloat(total.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    delete someArray[i].score
    delete someArray[i].genre
    delete someArray[i].duration
    delete someArray[i].director
  }

  someArray.sort(function (a, b) {
    a = new Date(a.year);
    b = new Date(b.year);
    return a - b
  })

  return someArray
}
// console.log(orderByYear(testArr))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    delete someArray[i].score
    delete someArray[i].genre
    delete someArray[i].duration
    delete someArray[i].director
    delete someArray[i].year
  }

  let newArray = someArray.slice(0, 20)

  newArray.sort(function (a, b) {
    x = a.title.toLowerCase()
    y = b.title.toLowerCase()
    if (x < y)
      return -1;
    if (x > y)
      return 1;
  })
  return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
