
let movieId = 0;

let movieList = [];

$(function(){
    $('#new-movie-form').on('submit', function(event){
        event.preventDefault();
        let movie = $("#movie").val();
        let rating = $("#rating").val();

        let movieInfo = { movie, rating, movieId};
        const HTMLtoAppend = createMovieDataHTML(movieInfo);

        movieId++
        movieList.push(movieInfo);

        $("#movie-table-body").append(HTMLtoAppend)
        $("#new-movie-div").trigger("reset");
    });

    $("tbody").on("click", ".btn.btn-danger", function(event){
        let indexToRemoveAt = movieList.findIndex(movies => movies.movieId === $(event.target).data("deleteId"))
    
        movieList.splice(indexToRemoveAt, 1);

        $(event.target)
        .closest("tr").remove();
    });
    $(".fas").on("click", function(event) {
        let direction = $(event.target).hasClass("fas-sort-down") ? "down" : "up";
        let keyToSortBy = $(event.target).attr("id");
        let sortedMov = sortBy(movieList, keyToSortBy, direction);
        
        $("#movie-table-body").empty();

        for (let mov of sortedMov) {
            const HTMLtoAppend = createMovieDataHTML(movies);
            $("#movie-table-body").append(HTMLtoAppend);
        }
        $(event.target).toggleClass("fas-sort-down");
        $(event.target).toggleClass("fas-sort-up");

    });
});

function sortBy(array, keyToSortBy, direction) {
    return array.sort(function(a, b) {
      // since rating is a number, we have to convert these strings to numbers
      if (keyToSortBy === "rating") {
        a[keyToSortBy] = +a[keyToSortBy];
        b[keyToSortBy] = +b[keyToSortBy];
      }
      if (a[keyToSortBy] > b[keyToSortBy]) {
        return direction === "up" ? 1 : -1;
      } else if (b[keyToSortBy] > a[keyToSortBy]) {
        return direction === "up" ? -1 : 1;
      }
      return 0;
    });
  }

  function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.movie}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.movieId}>
            Remove
          </button>
        </td>
      <tr>
    `;
  }
  