NewImg1 = new Array();
for (var n = 1; n <= 8; n++) {
  NewImg1[n - 1] = '햄버거\\맘스터치\\맘스터치_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 8; n++) {
  NewImg2[n - 1] = '햄버거\\버거킹\\버거킹_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 8; n++) {
  NewImg3[n - 1] = '햄버거\\맥도날드\\맥도날드_' + n + '.jpg';
}

var ImgNum = 0;
var ImgLength = 7;

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
