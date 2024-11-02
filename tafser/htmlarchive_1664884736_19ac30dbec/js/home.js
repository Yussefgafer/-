//fill menu
var childrenOfWrap = document.getElementById('wrap').children;
for (var i = 0; i < childrenOfWrap.length; i++) {
  if (i == 0) {} else if (i <= 114) {

    var frNameText = quran[Object.keys(quran)[i - 1]].fr;
    var arNameText = Object.keys(quran)[i - 1];

    // console.log(childrenOfWrap[i]);
    var container = document.createElement('div');
    container.classList.add('soura-container');
    var frName = document.createElement('div');
    frName.innerHTML = frNameText
    frName.classList.add('frName');
    frName.classList.add('souraNames');
    var arrow = document.createElement('div');
    var arrowImg = document.createElement('img');
    arrowImg.setAttribute('src', 'img/arrow2.png')
    arrow.appendChild(arrowImg);
    var icon = document.createElement('div');
    var iconImg = document.createElement('img');
    iconImg.setAttribute('src', 'img/motif-icon.png')
    icon.appendChild(iconImg);
    arrow.classList.add('arrow');
    icon.classList.add('icon');
    var iconP = document.createElement('p');
    iconP.innerHTML = (i);
    icon.appendChild(iconP);
    var arName = document.createElement('div');
    arName.innerHTML = arNameText
    arName.classList.add('arName');
    arName.classList.add('souraNames');
    // container.appendChild(frName);
    container.appendChild(arrow);
    container.appendChild(arName);
    container.appendChild(icon);
    childrenOfWrap[i].href = 'pages/index.html?id=' + (i)
    childrenOfWrap[i].appendChild(container)
  } else {
    break;
  }
}


function findSoura(page) {
  for (var i = 0; i < Object.keys(quran).length; i++) {
    // console.log(`start: ${quran[Object.keys(quran)[i]].startPage}-finish ${quran[Object.keys(quran)[i]].endPage}`);
    if (parseInt(page) >= parseInt(quran[Object.keys(quran)[i]].startPage) && parseInt(page) <= parseInt(quran[Object.keys(quran)[i]].endPage)) {
      return (i + 1)
    }
  }
}