var movieGallery = document.querySelector(".movie-gallery");

for (let i = 0; i < Object.keys(movieData).length; i++) {
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const div = document.createElement("div");
  const br = document.createElement("br");
  const contentCard = document.getElementsByClassName("contentCard");

  const movieInfo = Object.values(movieData);

  h3.textContent = Object.keys(movieData)[i] + movieInfo[i];

  p.textContent =
    "Release Year: " +
    movieInfo[i].year +
    "IMDB Rating: " +
    movieInfo[i].rating;
  p2.textContent = "Starring " + movieInfo[i].cast;
  p3.textContent = "Total Runtime " + movieInfo[i].runtime;

  div.id = "content";

  contentCard.append(h3);
  contentCard.append(p);
  contentCard.append(br);
  contentCard.append(p2);
  contentCard.append(br);
  contentCard.append(p3);
}


document.getElementById("contentCard").onmouseover = function {mouseOver()};
document.getElementById("contentCard").onmouseout = function {mouseOut()};

function mouseOver() {
  document.getElementsByClassName("contentCard").display="visble";

}

function mouseOut() {
  document.getElementsByClassName("contentCard").display="hidden";
  
}

//previously part of html
<div class="contentCard">
            <h3 class="title">this is the content card</h3>
            <ul class="content">
              <li class="rating"></li>
              <li class="runtime"></li>
              <li class="year"></li>
              <li class="plot"></li>
              <li class="class"></li>
            </ul>
          </div>
//end








        // Method returns string of 'length' characters of cast members (with ellipsis if truncated)
        this.getShortCast = function (length) {
          let castStr = "";
          for (let i = 0; i < this.cast.length; i++) {
            castStr += cast[i];
            // If this is not the last cast member, add a comma and a space
            if (i < this.cast.length - 1) {
              castStr += ", ";
            }
          }
          // If the cast string is longer than specified length, shorten it and add ellipsis (...)
          // Allow for the length of the ellipsis in the return string and zero based substring by subtracting four characters
          let shortCastStr =
            castStr.length <= length
              ? castStr
              : castStr.substring(0, length - 4) + "...";
          return shortCastStr;
        };
        this.getCast = function () {
          let castStr = "";
          for (let i = 0; i < this.cast.length; i++) {
            castStr += cast[i];
            // If this is not the last cast member, add a comma and a space
            if (i < this.cast.length - 1) {
              castStr += ", ";
            }
          }
          return castStr;
        };
      };

      importMovieData = function (catalogue, movies) {
        Object.keys(movies).forEach((name) => {
          catalogue.push(
            new Movie(
              name,
              movies[name].plot,
              movies[name].cast,
              movies[name].runtime,
              movies[name].rating,
              movies[name].year
            )
          );
        });
      };

      getRow = function (index) {
        displayMovieTable(index);
      };

      displayMovieTable = function (selectedIndex) {
        let movieRowsHtml = "";
        for (let i = 0; i < movieCatalogue.length; i++) {
          let movie = movieCatalogue[i];
          if (selectedIndex === i) {
            movieRowsHtml += `<tr id="${i}" onclick="getRow(${i})" class="selected-row">`;
          } else {
            movieRowsHtml += `<tr id="${i}" onclick="getRow(${i})">`;
          }

          movieRowsHtml += `<td>${movie.name}</td>`;
          movieRowsHtml += `<td>${movie.year}</td>`;
          movieRowsHtml += `<td>${movie.getShortCast(30)}</td>`;
          movieRowsHtml += `<td>${movie.rating}</td>`;

          movieRowsHtml += `<td><button class="edit-button" onclick="editMovie(${i})">Edit</button></td>`;
          movieRowsHtml += "</tr>";
        }
        movieListPlaceholder.innerHTML = movieRowsHtml;
        displayMovieDetails(selectedIndex);
      };

      displayMovieDetails = function (index) {
        if (
          typeof index === "number" &&
          index >= 0 &&
          index < movieCatalogue.length
        ) {
          let movieDetailsHtml = "<p>";

          let movie = movieCatalogue[index];

          console.log(index);
          movieDetailsHtml += `<h4>${movie.name} (${movie.year})</h4>`;
          movieDetailsHtml += `<p>Plot: ${movie.plot}</p>`;
          movieDetailsHtml += `<p>Cast: ${movie.getCast()}</p>`;
          movieDetailsHtml += `<p>Runtime: ${movie.runtime} minutes</p>`;
          movieDetailsHtml += `<p>Rating: ${movie.rating}</p>`;
          movieDetailsHtml += "</p>";

          movieDetailsPlaceholder.innerHTML = movieDetailsHtml;
        } else {
          movieDetailsPlaceholder.innerHTML =
            "<p>No movie has been selected. Select a movie in the list below to view its details.</p>";
        }
      };

      editMovie = function (index) {
        editModal.style.display = "block";
      };

      let movieData = {
        "The Darjeeling Limited": {
          plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
          cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
          runtime: 151,
          rating: 7.2,
          year: 2007,
        },
        "The Royal Tenenbaums": {
          plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
          rating: 7.6,
          year: 2001,
          cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
          runtime: 170,
        },
        "Fantastic Mr. Fox": {
          year: 2009,
          plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
          cast: [
            "George Clooney",
            "Meryl Streep",
            "Bill Murray",
            "Jason Schwartzman",
          ],
          runtime: 147,
          rating: 7.9,
        },
        "The Grand Budapest Hotel": {
          rating: 8.1,
          runtime: 159,
          year: 2014,
          plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
          cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
        },
        "The Grand Budapest Hotel 2": {
          rating: 6.1,
          runtime: 210,
          year: 2016,
          plot: "A writer returns to an aging high-class hotel to reprise his lobby boy activities.",
          cast: ["Ralph Fiennes"],
        },
      };

      let movieCatalogue = [];

      importMovieData(movieCatalogue, movieData);
      displayMovieTable("");
    </script>
  </body>
</html>



// another try

importMovieData = function (catalogue, movies) {
  Object.keys(movies).forEach((title) => {
    catalogue.push(
      new Movie(
        title,
        movies[title].rating,
        movies[title].runtime,
        movies[title].year,
        movies[title].plot,
        movies[title].cast
      )
    );
  });
};

let movie = function (title, plot, cast, runtime, rating, year) {
  this.title = title;
  this.plot = plot;
  this.cast = cast;
  this.runtime = runtime;
  this.rating = rating;
  this.year = year;
};
function(){

}