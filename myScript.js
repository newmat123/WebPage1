
function openOptionPannel() {

  var overlay = document.createElement('div');
  var pannel = document.createElement('div');

  var imageDiv = [];
  var images = ['pictures\\Python.png', 'pictures\\javascript.png', 'pictures\\cIcon.png'];

  for (var i = 0; i < images.length; i++) {
    imageDiv[i] = document.createElement('img');
  }

  var projectName = document.createElement('input');
  var projectDiscribt = document.createElement('input');
  var linktogithub = document.createElement('input');


  overlay.setAttribute('id', 'optionDisplay');
  pannel.setAttribute('class', 'optionPannel');


  projectName.setAttribute('type', 'text');
  projectName.setAttribute('name', 'projectNameText');
  projectName.setAttribute('value', 'Project name');

  projectDiscribt.setAttribute('id', 'projectDiscribt');
  projectDiscribt.setAttribute('type', 'text');
  projectDiscribt.setAttribute('name', 'projectdiscribtText');
  projectDiscribt.setAttribute('value', 'Project discription');

  linktogithub.setAttribute('id', 'linktogithub');
  linktogithub.setAttribute('type', 'text');
  linktogithub.setAttribute('name', 'projectLink');
  linktogithub.setAttribute('value', 'Github link');


  for (var i = 0; i < imageDiv.length; i++) {
    imageDiv[i].setAttribute('class', 'pic');
    imageDiv[i].setAttribute('src', images[i]);
    pannel.appendChild(imageDiv[i]);
  }

  pannel.appendChild(document.createElement('br'));
  pannel.appendChild(projectName);
  pannel.appendChild(document.createElement('br'));
  pannel.appendChild(projectDiscribt);
  pannel.appendChild(document.createElement('br'));
  pannel.appendChild(linktogithub);


  overlay.appendChild(pannel);

  document.body.appendChild(overlay);


  createCard(images[0], 'yes', 'text', 'https://github.com/newmat123/Backtraking')

}




function createCard(picture, picText, discript, linkToGit) {

  //creates all the div's, text and img needed for the card.
  var cards = document.createElement('div');


  var face1 = document.createElement('div');
  var con1 = document.createElement('div');

  var img = document.createElement('img');
  var h3 = document.createElement('h3');


  var face2 = document.createElement('div');
  var con2 = document.createElement('div');

  var innerText = document.createElement('p');
  var link = document.createElement('a');


  //gives the difrent div's class names (used for the style)
  cards.setAttribute('class', 'card');

  face1.setAttribute('class', 'face face1');
  con1.setAttribute('class', 'content');

  face2.setAttribute('class', 'face face2');
  con2.setAttribute('class', 'content');


  //setting the img and img-text
  img.setAttribute('src', picture);
  h3.innerHTML = picText;

  //sets the inner tex
  innerText.innerHTML = discript;

  //sets the link to the github
  link.innerHTML = 'Go to github >>';
  link.setAttribute('href', linkToGit);



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
