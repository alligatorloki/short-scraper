const form=document.getElementById('search-form');
form.addEventListener('submit',async (e)=>{
  e.preventDefault();
    let searchType="movie";
  
const searchTerm=document.getElementById('searchbox').value;
    const results= await getByTitle(searchType, searchTerm);
document.getElementById("result").innerHTML = searchTerm;
    displayResults(results);
})
const displayResults=async (results)=>{
    const resultsHeader = document.getElementById('search-heading');
    resultsHeader.style.display = 'block';
    const resultsElement=document.getElementById("search-results");
    resultsElement.style.display = 'block';
    resultsElement.innerHTML="";
    for (let i=0; i<results.length; i++){
        const div=document.createElement("div");
        div.classList.add("search-result");
        const image=document.createElement("img");
        image.src=results[i].image;
        div.appendChild(image);
        const title=document.createElement("div");
        title.classList.add("media-title");
        title.innerText=results[i].title+" ("+results[i].year+")";
    
    }
}
const getByTitle= async (searchType,searchTerm)=>{
    switch(searchType){
    
        case "movie":
            return await getListByMovieTitle(searchTerm);
            break;
    }
}
const getListByMovieTitle= async (searchTerm)=>{
    const url= "https://server-bookvie-tv.onrender.com/movie-search/?" + new URLSearchParams ({
      searchTerm
    });
  const results = await fetch(url);
  return results;
