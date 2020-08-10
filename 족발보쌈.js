NewImg1 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg1[n - 1] = '족발보쌈\\젠틀보쌈\\젠틀보쌈_' + n + '.jpg';
}

NewImg2 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg2[n - 1] = '족발보쌈\\마왕\\마왕_' + n + '.jpg';
}

NewImg3 = new Array();
for (var n = 1; n <= 4; n++) {
  NewImg3[n - 1] = '족발보쌈\\잭아저씨\\잭아저씨_' + n + '.jpg';
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
