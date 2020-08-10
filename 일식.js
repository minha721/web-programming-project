NewImg1 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg1[n - 1] = '일식\\신가쯔\\신가쯔_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg2[n - 1] = '일식\\맛참치\\맛참치_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg3[n - 1] = '일식\\미소야\\미소야_' + n + '.jpg';
}

var ImgNum = 0;
var ImgLength = 4;

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
