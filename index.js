const username = "Nazar";
// console.log(username);
function setup() {
  const box = document.querySelectorAll(".card");
  const cardArr = Array.from(box);
  // console.log(cardArr);
  cardArr.map((element) => initCard(element));
}

function initCard(card){
  // console.log(card);
  card.addEventListener("mousemove", function(e){
    // console.log("подія")
    const clientX = e.clientX;
    const clientY = e.clientY;
    // console.log(clientX)
    // console.log(clientY)
    const cardRect = card.getBoundingClientRect();
    // console.log(cardRect)
    const halfWidth = cardRect.width /2;
    const halfHeight = cardRect.height /2;
    // console.log(halfHeight)
    // console.log(halfWidth)
    const cardCenterX = cardRect.left + halfWidth;
    // console.log(cardCenterX)
    const cardCenterY = cardRect.top + halfHeight;
    // console.log(cardCenterY);
    const deltaX = clientX - cardCenterX;
    // console.log(deltaX);
    const deltaY = clientY - cardCenterY;
    // console.log(deltaY);
    const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY* deltaY) 
    // console.log(distanceToCenter);
    const maxDistance = Math.max(halfWidth, halfHeight);
    console.log(maxDistance);
    const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 8);
    const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); 
    const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
    // console.log(degree);
    // console.log(rx);
    // console.log(ry);
    this.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
  })
  card.addEventListener('mouseleave', function(){
    this.style.transform="none";
  })
}
function mapNumberRange (n, a, b, c, d){
    const andriiDaun = (n - a) * (d - c) / (b - a);
    return c + andriiDaun;
}
setup();