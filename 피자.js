NewImg1 = new Array();
for (var n = 1; n <= 7; n++) {
  NewImg1[n - 1] = '피자\\만스피자\\만스피자_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 7; n++) {
  NewImg2[n - 1] = '피자\\피자마루\\피자마루_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 7; n++) {
  NewImg3[n - 1] = '피자\\피자헤븐\\피자헤븐_' + n + '.jpg';
}

var ImgNum = 0;
var ImgLength = 6;

function chgImg(direction, targetId, store) {
  if (document.getElementById(targetId)) {
    ImgNum = ImgNum + direction;
    if (ImgNum > ImgLength) {
      ImgNum = 0;
    }
    if (ImgNum < 0) {
      ImgNum = ImgLength;
    }
    document.getElementById(targetId).src = store[ImgNum];
  }
}
