const API_KEY = "3788633d8d62472d91892361aa564d5e";
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    
    const data = await res.json();
    console.log(data);
    
    //bindData(data.articles);
}