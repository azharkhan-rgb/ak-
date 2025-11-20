document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(a=>{
    try{ if(location.pathname.endsWith(a.getAttribute('data-file'))){ a.classList.add('active'); } }catch(e){}
    a.addEventListener('click', ()=>{ navLinks.forEach(x=>x.classList.remove('active')); a.classList.add('active'); });
  });
  const contactForm = document.querySelector('form.contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.querySelector('[name=name]').value || 'Customer';
      const email = this.querySelector('[name=email]').value || '';
      const message = this.querySelector('[name=message]').value || '';
      const text = 'Hi AK Studio, I want to book a service.%0AName:%20'+encodeURIComponent(name)+'%0AEmail:%20'+encodeURIComponent(email)+'%0AMessage:%20'+encodeURIComponent(message);
      window.open('https://wa.me/7599352406?text='+text,'_blank');
      alert('Opening WhatsApp...');
      this.reset();
    });
  }
});