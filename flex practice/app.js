
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_links');


hamburger.addEventListener('click', function(){
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
})
document.querySelectorAll('#nav_links_a').forEach(n => n.addEventListener('click', function(){
	hamburger.classList.remove('active');
	navMenu.classList.remove('active')
}))