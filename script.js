// Interactividad mínima para el sitio estático
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('feedback');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if(!nombre || !email || !mensaje){
      feedback.textContent = 'Por favor completa todos los campos.';
      feedback.style.color = 'crimson';
      return;
    }
    // Construir mailto:
    const subject = encodeURIComponent('Contacto desde sitio BS IBBY México - ' + nombre);
    const body = encodeURIComponent('Nombre: ' + nombre + '\nCorreo: ' + email + '\n\n' + mensaje);
    // correo destino:
    const mailTo = 'contacto@ibbymexico.org.mx';
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
    feedback.textContent = 'Se abrió tu cliente de correo. Completa el envío desde ahí.';
    feedback.style.color = 'green';
  });
});