const cssButton = document.getElementById('css-button');
const ikiButton = document.getElementById('ikinci-button');
const dugme = document.getElementById('dugme');
const bilgi = document.getElementById("bilgi");


cssButton.addEventListener('click', function() {
  const body = document.querySelector('body');
  body.style.backgroundImage = "url('https://i.pinimg.com/originals/f9/a8/ed/f9a8ed161524ca06e0d5250fe2d33e51.gif')";
  body.style.color = 'white';
  dugme.style.left = '200px';
  cssButton.style.left = '200px';
  cssButton.style.backgroundImage = "url('https://media.istockphoto.com/id/470801984/tr/foto%C4%9Fraf/moon-surface.jpg?s=612x612&w=0&k=20&c=N8N3RZRY8BjWL8wPYjAGxzyuy68sX_A8jgfchp6VoCw=')";
  cerceve.style.backgroundColor = 'black';
  bilgi.style.fontFamily = 'Courier New';
  bilgi.classList.add('slow-transition');
  bilgi.textContent = "Gece, akşamın sona ermesinden sonra başlayan ve sabah güneşin doğuşuyla sona eren zaman dilimidir.Gecenin başlangıç ve bitiş saatleri o yerin, mevsim, enlem, boylam ve zaman dilimine göre değişir.";
});

ikiButton.addEventListener('click', function() {
    const body = document.querySelector('body');
    body.style.backgroundImage = "url('https://bestanimations.com/media/sky/2018762848pink-beautiful-sky-gif.gif')";
    body.style.color = 'black';
    dugme.style.left = '0px';
    cssButton.style.left = '0px';
    cssButton.style.backgroundImage = "url('https://st.depositphotos.com/2459687/3110/v/950/depositphotos_31108149-stock-illustration-yellow-and-orange-abstract-magic.jpg')";
    cerceve.style.backgroundColor = 'rgb(132, 191, 250)';
    bilgi.style.fontFamily ='Gabriola';
    bilgi.textContent = "Gündüz, gündoğumundan günbatımına kadar olan, günün aydınlık kısmı. Zaman zaman gün sözcüğü de gündüz anlamında kullanılır.  Yılda iki defa gerçekleşen gündönümlerinde yılın en uzun ve en kısa gündüzleri yaşanır.";
  });


