NewImg1 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg1[n - 1] = '치킨\\미쳐버린파닭\\미쳐버린파닭_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg2[n - 1] = '치킨\\깻잎두마리칩킨\\깻잎두마리칩킨_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 5; n++) {
  NewImg3[n - 1] = '치킨\\지코바\\지코바_' + n + '.jpg';
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
