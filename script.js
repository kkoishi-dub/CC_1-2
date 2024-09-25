let detailsForm = document.querySelector('#destination_details_form');
let destinations_container = document.querySelector('#destinations_container');
let removeBtn = destinations_container.querySelector('button');
removeBtn.addEventListener("click", removeDestination);

detailsForm.addEventListener('submit', event =>{
  event.preventDefault();
  const name = detailsForm.querySelector('#name').value;
  const location = detailsForm.querySelector('#location').value;
  const photo = detailsForm.querySelector('#photo').value;
  const description = detailsForm.querySelector('#description').value;

  let card = document.createElement("div");
  card.className='card';

  let img = document.createElement('img');
  img.setAttribute('src',photo);
  card.appendChild(img);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  
  let cardTitle = document.createElement("h3");
  cardTitle.innerText = name;
  cardBody.appendChild(cardTitle);

  let cardSubtitle = document.createElement("h4");
  cardSubtitle.innerText = location;
  cardBody.appendChild(cardSubtitle);

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText=description;
  cardBody.appendChild(cardText);

  let cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.innerText = "Remove";
  cardDeleteBtn.addEventListener("click", removeDestination);
  cardBody.appendChild(cardDeleteBtn);

  destinations_container.appendChild(card);
  card.appendChild(cardBody);



});


function removeDestination(event){
  var card = event.target.parentElement.parentElement;
  card.remove();
}
