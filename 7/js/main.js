var moviesEl = document.querySelector(".otadiv")

for(var i=0; i< movies.length; i++){
    
    var moviesCon = document.createElement("div")
    moviesCon.className="card"
    
    var titleEl = document.createElement("h2")
    titleEl.className="title_h3"
    titleEl.textContent = movies[i].title
    moviesCon.appendChild(titleEl)


    var imageUrlEl = document.createElement("img")
    imageUrlEl.className="img_mv"
    imageUrlEl.src = movies[i].imageUrl
    moviesCon.appendChild(imageUrlEl)


    let btnEl = document.createElement("button")
    btnEl.className="btn"
    btnEl.textContent = "batafsil"
    moviesCon.appendChild(btnEl)



    btnEl.addEventListener('click',() => {
        
        var drrlEl = document.createElement("h2")
        drrlEl.className="hhh2"
        drrlEl.textContent = movies[i].title
        moviesCon.appendChild(drrlEl)

        
       
})
    
    moviesEl.appendChild(moviesCon)

}


