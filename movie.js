 // Q.no 1
// 1)Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie{
    constructor(movieName,studio,rating){
        this.movieName=movieName;
        this.studio=studio;
        this.rating=rating;
    }
}var a = new Movie("cindrella","Disney","PG");
console.log(a.movieName,a.studio,a.rating);// cindrella ,Disney, PG


//2)The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie{
    constructor(movieName,studio,rating="PG"){
            this.movieName=movieName;
            this.studio=studio;
            this.rating=rating;

    }
  }  var a = new Movie("cindrella","Disney");
  console.log(a.rating);//PG

  //3).Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

  class Movie {
    constructor(title, rating) {
      this.title = title;
      this.rating = rating;
    }
  }
  
  function getPG(movies) {

    const pgMovies = movies.filter(movie => movie.rating === "PG");
    return pgMovies;

  }
  
  const movies = [
    new Movie("sachin", "PG"),
    new Movie("peram", "PG-13"),
    new Movie("leo", "PG"),
    new Movie("mark antony", "R"),
  ];
  
  const pgMovies = getPG(movies);
  console.log(pgMovies); 

  /*output:
[
  Movie { title: 'sachin', rating: 'PG' },
  Movie { title: 'leo', rating: 'PG' }
]*/

//4)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(movieName,studio,rating) {
        this.movieName=movieName;
        this.studio=studio;
        this.rating=rating;
    }
    getvalue()

    {

       return `Title : ${this.movieName} Studio : ${this.studio} rating : ${this.rating}`
    }
} var a = new Movie( "Casino Royale", " Eon Productions","PG13");
console.log(a.value);
//output = Title : Casino Royale  , Studio :  Eon Productions , rating : PG13.