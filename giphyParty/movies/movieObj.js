class Movie {
    constructor(currentMovie = 0){
        this.movieList = [];
        this.currentMovie = currentMovie;
    }
    addMovie(title, rating){
        console.log('Adding Movie')
        const movie = {
            id : this.currentMovie++,
            title,
            rating,
        }
        this.movieList.push(movie);
        this.save();
      };
    }