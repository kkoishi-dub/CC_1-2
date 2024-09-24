(function(){
  "use strict"


  const form = document.getElementById('convert');
  let titleMessage = document.querySelector('h1');
  let mileToKilo = true;
  const converter = 1.60934;
  const checkIfNumber = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
  window.addEventListener("keydown", function(e){
    if(e.key==='k' || e.key==='K'){
      titleMessage.innerHTML='Kilometers to Miles Converter';
      mileToKilo = false;
    }else if(e.key==='m' || e.key==='M'){
      titleMessage.innerHTML='Miles to Kilometers Converter';
      mileToKilo = true;
    }
  });
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const element = document.querySelector('#answer').querySelector('h2'); 
    const distance = document.getElementById('distance').value;
    element.classList.remove('invisible');

    if(checkIfNumber.test(distance)){
      if(mileToKilo)element.innerHTML = `${distance} miles converts to ${Math.round(distance * converter * 10000)/10000} kilometers`;
      else element.innerHTML = `${distance} kilometers converts to ${Math.round(10000* distance / converter)/10000} miles`;
    }else{
      element.innerHTML = "(Error) Please input the correct Number";
    }
      
    
  });


})();