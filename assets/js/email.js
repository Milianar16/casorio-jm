
// Inicializa o EmailJS
(function(){
    emailjs.init("7UwqTZRb-t0oIBkNF"); // <-- Substitua aqui pela sua Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm("service_rjddknp", "template_69xwyoq", this)
      .then(function() {
        alert("Mensagem enviada com sucesso! 🎉");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Erro ao enviar. 😥 Tente novamente.");
        console.error("Erro:", error);
      });
  });
