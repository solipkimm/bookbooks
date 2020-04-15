/** Add any JavaScript you need to this file. */
// Contact Form - additional text box for Order Problem
if (document.querySelector('.form3')) {
  let form3 = document.querySelector('.form3');
  form3.addEventListener('click', function(reason) {
    let InputBoxLocation = document.querySelector('#orderNumber');
    let clicked = reason.target.value;
    if (clicked === 'OrderProblem') {
      InputBoxLocation.type = 'text';
    } else {
      InputBoxLocation.type = 'hidden';
    }
  });
}

// menu - home button
let menuHome = document.querySelector('#menu-home');
menuHome.onclick = function() {
  if (document.querySelector('#menu2')) {
    document.getElementById('menu2').hidden = true;
    document.getElementById('menu1').hidden = false;
  }
  if (document.querySelector('#menu3')) {
    document.getElementById('menu3').hidden = true;
    document.getElementById('menu1').hidden = false;
  }
  if (document.querySelector('#menu4')) {
    document.getElementById('menu4').hidden = true;
    document.getElementById('menu1').hidden = false;
  }
  document.getElementById('main-top').hidden = false;
  document.getElementById('menuLine-new').hidden = false;
  document.getElementById('menuLine-bestsellers').hidden = false;
  document.getElementById('menuLine-fiction').hidden = false;
  document.getElementById('menuLine-nonfiction').hidden = false;
  document.getElementById('arrow1').hidden = false;
  document.getElementById('arrow2').hidden = false;
  document.getElementById('arrow3').hidden = false;
  document.getElementById('arrow4').hidden = false;
};

// menu - books button
let menuBooks = document.querySelector('#menu-books');
menuBooks.onclick = function() {
  if (document.querySelector('#main2')) {
    document.getElementById('main2').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main3')) {
    document.getElementById('main3').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main4')) {
    document.getElementById('main4').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = false;
  document.getElementById('menuLine-bestsellers').hidden = false;
  document.getElementById('menuLine-fiction').hidden = false;
  document.getElementById('menuLine-nonfiction').hidden = false;
  document.getElementById('arrow1').hidden = false;
  document.getElementById('arrow2').hidden = false;
  document.getElementById('arrow3').hidden = false;
  document.getElementById('arrow4').hidden = false;
};

// menu - new button
let menuNew = document.querySelector('#menu-new');
menuNew.onclick = function() {
  if (document.querySelector('#main2')) {
    document.getElementById('main2').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main3')) {
    document.getElementById('main3').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main4')) {
    document.getElementById('main4').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = false;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow1').hidden = true;
};

// New book arrow button
let arrowNew = document.querySelector('#arrow1');
arrowNew.onclick = function() {
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = false;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow1').hidden = true;
};

// menu - bestsellers button
let menuBestsellers = document.querySelector('#menu-bestsellers');
menuBestsellers.onclick = function() {
  if (document.querySelector('#main2')) {
    document.getElementById('main2').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main3')) {
    document.getElementById('main3').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main4')) {
    document.getElementById('main4').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = false;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow2').hidden = true;
};

// bestsellers arrow button
let arrowBest = document.querySelector('#menu-bestsellers');
arrowBest.onclick = function() {
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = false;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow2').hidden = true;
};
// menu - fiction button
let menuFiction = document.querySelector('#menu-fiction');
menuFiction.onclick = function() {
  if (document.querySelector('#main2')) {
    document.getElementById('main2').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main3')) {
    document.getElementById('main3').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main4')) {
    document.getElementById('main4').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = false;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow3').hidden = true;
};

// fiction arrow button
let arrowFic = document.querySelector('#arrow3');
arrowFic.onclick = function() {
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = false;
  document.getElementById('menuLine-nonfiction').hidden = true;
  document.getElementById('arrow3').hidden = true;
};

// menu - nonfiction button
let menuNonfiction = document.querySelector('#menu-nonfiction');
menuNonfiction.onclick = function() {
  if (document.querySelector('#main2')) {
    document.getElementById('main2').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main3')) {
    document.getElementById('main3').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  if (document.querySelector('#main4')) {
    document.getElementById('main4').hidden = true;
    document.getElementById('main1').hidden = false;
  }
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = false;
  document.getElementById('arrow4').hidden = true;
};

// nonfiction arrow button
let arrowNfic = document.querySelector('#arrow4');
arrowNfic.onclick = function() {
  document.getElementById('main-top').hidden = true;
  document.getElementById('menuLine-new').hidden = true;
  document.getElementById('menuLine-bestsellers').hidden = true;
  document.getElementById('menuLine-fiction').hidden = true;
  document.getElementById('menuLine-nonfiction').hidden = false;
  document.getElementById('arrow4').hidden = true;
};
