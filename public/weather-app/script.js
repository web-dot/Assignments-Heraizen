
var input = document.querySelector(".form-control");
var form = document.querySelector("form");

var dataTable = document.querySelector(".table");



var apiReq = new XMLHttpRequest();
        // var city = input.value;

        function ajaxCall(){
        // var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9d0924c861810e5ff8d780fa761b9f6d`;
        //apiReq.open("GET", url, true);
        apiReq.onload = (e) => {
            if(apiReq.readyState === 4){
                if(apiReq.status === 200){
                    var jsonData = apiReq.response;
                    var parsedData = JSON.parse(jsonData);
                    //console.log(parsedData);
                    //console.log(parsedData.main);
                    //sendData(jsonData);
                }
                else{
                    console.error(apiReq.statusText)
                }
            }
        }
        //apiReq.send(null);
        return parsedData;
    }



        form.addEventListener('submit', function(e){
            e.preventDefault();

            var city = input.value;
            console.log(city);
            var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9d0924c861810e5ff8d780fa761b9f6d`;
            apiReq.open("GET", url, true);
            apiReq.onload = (e) => {
                if(apiReq.readyState === 4){
                    if(apiReq.status === 200){
                        var jsonData = apiReq.response;
                        var parsedData = JSON.parse(jsonData);
                        console.log(parsedData);
                        console.log(parsedData.main);
                        var content = dataTable.innerHTML;
                        content = content + `<thead><tr><th scope="col">coord</th><th scope="col">city</th><th scope="col">feels_like</th><th scope="col">humidity</th><th scope="col">temperature</th><th scope="col">wind-speed</th><th scope="col">clouds</th></tr></thead><tr><td>${parsedData.coord["lat"]} : ${parsedData.coord["lon"]}</td><td>${city}</td><td>${parsedData.main["feels_like"]}</td><td>${parsedData.main["humidity"]}</td><td>${parsedData.main["temp"]}</td><td>${parsedData.wind["speed"]}</td><td>${parsedData.weather[0]["description"]}</td></tr>`;
                        dataTable.innerHTML = content;
                    }
                    else{
                        console.error(apiReq.statusText)
                    }
                }
            }
            apiReq.send(null);
            // var content = dataTable.innerHTML;
            // content = content + `<tr><td>${parsedData.main["feels_like"]}</td><td>${parsedData.main["humidity"]}</td><td>${parsedData.main["temp"]}</td></tr>`;
            // dataTable.innerHTML = content;
        })
        
        
        