let phrases = [
    { text: 'Димасик', image: 'images/little-dima.jpg' },
    { text: 'Димасик', image: 'images/lazy-dima.jpg' },
    { text: 'Дмитрий', image: 'images/street-dima.jpg' },
    { text: 'Дмитрий', image: 'images/serious-dima.jpg' },
    { text: 'Дима', image: 'images/press-dima.jpg' },
    { text: 'Дмитрий', image: 'images/cool-dima.jpg' },
    { text: 'Дмитрий', image: 'images/cry-dima.jpg' },
    { text: 'Большой Димовски', image: 'images/big-dimowski.jpg' },
    { text: 'Быдленок', image: 'images/bydlyonok.jpg' },
    { text: 'Маленький быдленок', image: 'images/little-bydlyonok.jpg' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i <= 10; i++) {
      smoothly(phrase, 'textContent', phrases[i].text);
      smoothly(image, 'src', phrases[i].image);
    }