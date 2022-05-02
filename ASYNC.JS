let url = `https://www.omdbapi.com/?apikey=3bc6bab9&t=`
let container = document.getElementById("container")
async function getMovie() {
    try {

        let res = await fetch(url)

        let data = await res.json()

        appendsearch(data)

    }
    catch (err) {

        console.log("Movie not found", err);
    }

}
function appendsearch(d) {
    console.log(d);
    container.textContent = null

    let div = document.createElement("div")

    let name = document.createElement("p")
    name.textContent = `Movie Name :- ${d.Title}`

    let image = document.createElement("img")
    image.src = d.Poster

    let release_date = document.createElement('p')
    release_date.textContent = `Released :- ${d.Released}`

    let actors = document.createElement('p')
    actors.textContent = `Actors :- ${d.Actors}`

    let runtime = document.createElement('p')
    runtime.textContent = `Runtime ⏱ :- ${d.Runtime}`

    let year = document.createElement('p')
    year.textContent = `Year :- ${d.Year}`

    let imdb_rating = document.createElement('p')
    imdb_rating.textContent = `Rating :- ${d.imdbRating}⭐`
    if (Number(d.imdbRating > 8.5)) {
        div.append(image, name, year, actors, runtime, imdb_rating, release_date)
    }
    else {
        div.append(image, name, year, actors, runtime, release_date)
    }

    container.append(div)

}
function search() {

    let movie = document.getElementById("sanju").value
    if (movie == "") {
        alert("Please enter the movie name")
    }
    else {
        url = `https://www.omdbapi.com/?apikey=e3148ffb&t=${movie}`
        getMovie()
    }

}