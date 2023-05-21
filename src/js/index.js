let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=85cb2a61`;
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="message">Please enter a movie name </h3>`;
    }
    else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <div class="hover-div">
                        <img  src=${data.Poster} class="poster img-hov">
                        </div>
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="./src/img/star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }
            else {
                result.innerHTML = `<h3 class="message">${data.Error}</h3>`;
            }
        })
            .catch(() => {
                result.innerHTML = `<h3 class="message">Error Founded</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);