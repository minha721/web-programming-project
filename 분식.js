NewImg1 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg1[n - 1] = '분식\\삐삐\\삐삐_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg2[n - 1] = '분식\\엽떡\\엽떡_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg3[n - 1] = '분식\\소라분식\\소라분식_' + n + '.jpg';
}

var ImgNum = 0;
var ImgLength = 3;

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
