// Función para auto-seleccionar plan desde las tarjetas de planes
    function seleccionarPlan(nombrePlan) {
      const select = document.getElementById('servicio_interes');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.includes(nombrePlan) || select.options[i].value.includes(nombrePlan)) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      const contactoSection = document.getElementById('cotizador-whatsapp');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Procesador Inteligente con Redirección a WhatsApp Oficial
    function enviarAWhatsApp(event) {
      event.preventDefault();
      
      const nombre = document.getElementById('cliente_nombre').value.trim();
      const telefono = document.getElementById('cliente_telefono').value.trim();
      const servicio = document.getElementById('servicio_interes').value;
      const zona = document.getElementById('cliente_zona').value.trim();
      const mensaje = document.getElementById('cliente_mensaje').value.trim();

      // Construcción del mensaje profesional estructurado
      let texto = `*SOLICITUD DE COTIZACIÓN - WIRELESS SUPPLY C.A.*\n`;
      texto += `----------------------------------------\n`;
      texto += `*Cliente/Empresa:* ${nombre}\n`;
      texto += `*Teléfono:* ${telefono}\n`;
      texto += `*Servicio de Interés:* ${servicio}\n`;
      texto += `*Zona/Ciudad:* ${zona}\n`;
      if (mensaje) {
        texto += `*Detalles Adicionales:* ${mensaje}\n`;
      }
      texto += `----------------------------------------\n`;
      texto += `_Consulta enviada desde el portal web oficial (RIF: J507358860)_`;

      const mensajeCodificado = encodeURIComponent(texto);
      
      // Número corporativo de Wireless Supply (se puede sustituir por la línea final oficial)
      const numeroWhatsApp = "584120000000";
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

      // Mostrar confirmación visual
      const feedback = document.getElementById('formFeedback');
      if (feedback) {
        feedback.classList.remove('hidden');
      }

      // Redireccionar a WhatsApp en nueva pestaña
      setTimeout(function() {
        window.open(urlWhatsApp, '_blank');
      }, 700);
    }
