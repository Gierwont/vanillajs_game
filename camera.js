function Camera() {
  this.width = window.innerWidth; //wymiary	okna	przeglądarki
  this.height = window.innerHeight;

  this.x = 0; //pozycja	kamery
  this.y = 0;

  //1.	przesuwaj	w	prawo	jeśli	nie	doszliśmy	do	końca	mapy
  //2.	przesuń	kontekst	żeby	zaktualizować	obiekty	gry
  //3.	zmień	pozycję	kamery
  this.right = function (ctx) {
    if(this.x <  160)
    ctx.translate(-5, 0);
    this.x += 5;
  };
  this.left = function (ctx) {
    if(this.x > 0) {
      ctx.translate(5, 0);
      this.x -= 5;
    }
  
  };
  this.up = function (ctx) {
    if(this.y > 0) {
      ctx.translate(0, 5);
      this.y -= 5;
    }

  };
  this.down = function (ctx) {
    if(this.y < 250) {
      ctx.translate(0,-5);
      this.y += 5;
    }
 
  };
}

export default Camera;
