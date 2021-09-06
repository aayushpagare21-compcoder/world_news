console.log('Aayush');

// 58f9aefd017649859c54eb53cca9458d 

//FOR DOM POPULATION
newsAccordion = document.getElementById('accordionExample');

//CREATE AJAX GET REQUEST 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=c448bbd4773130406e14bcf3ac62f091
`, true);

xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    
    let newsHtml = ``; 

    articles.forEach(function(element, index) {
        console.log(element); 
        let news =  
        `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-2 heading">
                    <button class="btn collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${element['title']}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                data-parent="#accordionExample">
                <div class="card-body">
                    ${element['content']} <a href = ${element['url']}> Read More </a>
                </div>
            </div>
        </div>`; 

        newsHtml += news;
    }); 

    newsAccordion.innerHTML = newsHtml;
}

xhr.send();

