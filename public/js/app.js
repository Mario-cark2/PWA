// JavaScript source code
 const marvel ={

	  render:()=>{

 
			const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d8b2231de0feb790009044d65e9e900a&hash=79929f99aad792802ceb7ec63ea26b79';
			const container= document.querySelector('#marvel-row');
			let contentHTML = '';

			fetch(urlAPI)
			.then(res=> res.json())
			.then((json)=> {
			 for(const hero of json.data.results){
				  let urlHero = hero.urls[0].url;
				  contentHTML += `      <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();