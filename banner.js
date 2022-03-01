

var banners = ['img/destaque-home.png', 'img/destaque-home2.png', 'img/destaque-home3.png'];
var destaqueAtual = 0;

function trocarBanner (){
	
   if (destaqueAtual > 2){
	   destaqueAtual = 0;
   }
      console.log(destaqueAtual);
	  
    document.querySelector('.banner img').src = banners[destaqueAtual];

      destaqueAtual += 1;		  
	
 
	
}

setInterval(trocarBanner, 4000);


      
	  