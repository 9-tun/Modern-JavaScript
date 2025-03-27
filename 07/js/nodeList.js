let newImg = document.createElement("img");
let srcNode = document.createAttribute("src");
srcNode.value = "images/wall.jpg";
newImg.setAttributeNS(srcNode);
document.body.appendChild("newImg");