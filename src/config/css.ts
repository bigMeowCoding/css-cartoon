export const cssConfig = `body,
html {
  height: 100%;
}
ul {
  padding: 0;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
.parent,
.child {
  width: 200px;
}
.parent {
  height: 200px;
  padding: 10px;
  background: yellow;
}
.child {
  height: 100%;
  padding: 20px;
  background: pink;
}
.image1 {
  background: url(6ff2144f6d3155bbbd5188e04f2d7c94.jpg);
}
.image3 {
  background: url(3e1abbdae60c8a3fee314f32dafbc9a6.jpg);
}
.image2 {
  background: url(61feea3474333e6a32401d16575918cd.jpg);
}
.image-list {
  display: flex;
  width: 200px;
  overflow: auto;
  padding: 0 20px;
  background: red;
}
.image-list li {
  background: yellow;
  width: 100%;
  height: 200px;
}
.image-list li div {
  width: 100%;
  height: 100%;
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  width: 100px;
  height: 30px;
  border: 3px solid black;
  border-top-color: transparent;
  position: absolute;
  left: 50%;
  background: #ffe600;
  border-right-color: transparent;
  margin-left: -50px;
}
.mouth .up .lip:before {
  content: "";
  display: block;
  height: 30px;
  width: 7px;
  bottom: 0;
  background: #ffe600;
  position: absolute;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 35px;
  transform: rotate(-20deg) translateX(-53px);
}
.mouth .up .lip.left:before {
  right: -6px;
}
.mouth .up .lip.right {
  border-radius: 0 0 35px 0;
  transform: rotate(20deg) translateX(53px);
}
.mouth .up .lip.right:before {
  left: -6px;
}
.mouth .down {
  height: 180px;
  position: absolute;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1 {
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  background: #9b000a;
  border-radius: 50%;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 200px;
  background: #ff485f;
  height: 300px;
  position: absolute;
  bottom: -160px;
  left: 50%;
  margin-left: -100px;
  border-radius: 50% 50% 0 0/ 100% 100% 0 0;
}
.eye {
  position: absolute;
  left: 50%;
  width: 64px;
  top: 100px;
  height: 64px;
  background: black;
  border-radius: 50%;
  margin-left: -32px;
}
.eye:before {
  content: "";
  display: block;
  position: relative;
  left: 12px;
  top: 4px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.face {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 88px;
  height: 88px;
  background: #ff0000;
  border-radius: 50%;
  margin-left: -32px;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}
.nose {
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  margin-left: -10px;
  top: 145px;
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  z-index: 20;
}
.nose .yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  border-radius: 50% 50% 0 0;
  background: black;
  top: -16px;
  left: -10px;
}
.skin {
  position: relative;
  height: 100%;
  background: #ffe600;
}
`;
