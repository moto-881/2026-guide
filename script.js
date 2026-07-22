
window.addEventListener('scroll', () => {

  const scrollY = window.scrollY;


  const sideCols = document.querySelectorAll('.col-side');
  const centerCol = document.querySelector('.col-center');

  sideCols.forEach(col => {
    col.style.transform = `translateY(calc(-30% + ${scrollY * 0.5}px))`;
  });


  if (centerCol) {
    centerCol.style.transform = `translateY(-${scrollY * 0.8}px)`;
  }
});



const track = document.getElementById('slideshowTrack');

if (track) {
  let scrollInterval;
  const speed = 3000; 

  function startAutoSlide() {
    scrollInterval = setInterval(() => {
    
      const box = track.querySelector('.box');
      const boxWidth = box ? box.offsetWidth + 20 : 200;

     
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: boxWidth, behavior: 'smooth' });
      }
    }, speed);
  }
 
  startAutoSlide();

  track.addEventListener('mouseenter', () => clearInterval(scrollInterval));
  track.addEventListener('mouseleave', () => startAutoSlide());
}
