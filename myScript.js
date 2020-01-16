function createCard() {

  //creates all the div's, text and img needed for the card.
  var cards = document.createElement('div');


  var face1 = document.createElement('div');
  var con1 = document.createElement('div');

  var img = document.createElement('img');
  var h3 = document.createElement('h3')


  var face2 = document.createElement('div');
  var con2 = document.createElement('div');

  var innerText = document.createElement('p');
  var link = document.createElement('a')


  //gives the difrent div's class names (used for the style)
  cards.setAttribute('class', 'card')

  face1.setAttribute('class', 'face face1')
  con1.setAttribute('class', 'content')

  face2.setAttribute('class', 'face face2')
  con2.setAttribute('class', 'content')


  //setting the img and img-text
  img.setAttribute('src', 'pictures\\Python.png');
  h3.innerHTML = 'the text';

  //sets the inner tex
  innerText.innerHTML = 'fimjruigjdtisfjkgithojmrtgifeihregjijrfikjitgji text'

  //sets the link to the github
  link.innerHTML = 'Go to github >>'
  link.setAttribute('href', 'https://github.com/newmat123/Backtraking')



  //appends them as the correct tree
  con1.appendChild(img);
  con1.appendChild(h3);

  face1.appendChild(con1);

  cards.appendChild(face1);


  con2.appendChild(innerText);
  con2.appendChild(link);

  face2.appendChild(con2);

  cards.appendChild(face2);


  //instansiates the card as child of the container.
  document.getElementById('con').appendChild(cards);

}
