
var baseURL = `https://newsapi.org/v2/top-headlines`;
var apiKey = "50b5124239de44028f560270f3555881";



const countries = [{'name' : 'USA','code': 'us'},{'name' : 'india','code' : 'in'},{'name' : 'New Zealand','code' : 'nz'}];
const catagories = ["health","technology", "sports", "general"];

const form = document.querySelector("form");


getSelectCountry();
getSelectCategory();
getData();

function getSelectCountry(){
    const countryElem = document.querySelector('#countryId');
    let selectCountry = `<select class="form-control" id='selectedCountry'>`;
    countries.forEach(country => {
        selectCountry += `<option value="${country['code']}">${country['name']}</option>`
    });
    selectCountry += `</select>`
    countryElem.innerHTML = selectCountry;
}
function getSelectCategory(){
    const categoryElem = document.querySelector('#categoryId');
    let selectcategory = `<select class="form-control" id='selectedcategory'>`;
    catagories.forEach(category => {
        selectcategory += `<option value="${category}">${category}</option>`
    });
    selectcategory += `</select>`
    categoryElem.innerHTML = selectcategory;
}

    function getData(){
        const country = document.querySelector("#selectedCountry").value;
        const category = document.querySelector("#selectedcategory").value;
        
        let url = `${baseURL}?country=${country}&category=${category}&apiKey=${apiKey}`;

        fetch(url).then(res=>res.json()).then(
            result => {
                news = result["articles"];
                viewNews(news);
                console.log(news)
        })

        // fetch(url).then(response => {
        //     return response.json();
        // })
        // .then(json => {
        //     console.log(json);
        // })

}


function viewNews(news){
    const newsItemELem = document.querySelector("#newsItemId");
    let data = '';
    news.forEach(element => {
        data += `<div class="col-md-3">
        <div class="card" style="width: 17rem;">
        <img class="card-img-top" src=${element["urlToImage"]} alt="...">
        <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <p class="card-text">${element["description"]}</p>
        <a href="${element["url"]}" class="btn btn-primary">more</a>
        </div>
        </div>
        </div>`;
    });
    newsItemELem.innerHTML = data;
}
