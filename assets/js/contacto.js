function enviarContacto(event) {
      event.preventDefault();
      
      const nombre = document.getElementById('input_nombre').value.trim();
      const telefono = document.getElementById('input_telefono').value.trim();
      const servicio = document.getElementById('input_servicio').value;
      const ciudad = document.getElementById('input_ciudad').value.trim();
      const consulta = document.getElementById('input_consulta').value.trim();

      let texto = `*SOLICITUD DE COTIZACIÓN - WIRELESS SUPPLY C.A.*\n`;
      texto += `----------------------------------------\n`;
      texto += `*Cliente/Empresa:* ${nombre}\n`;
      texto += `*Teléfono:* ${telefono}\n`;
      texto += `*Servicio Requerido:* ${servicio}\n`;
      texto += `*Zona/Ciudad:* ${ciudad}\n`;
      if (consulta) {
        texto += `*Detalles:* ${consulta}\n`;
      }
      texto += `----------------------------------------\n`;
      texto += `_Enviado desde la página de Contacto (RIF: J507358860)_`;

      const msg = encodeURIComponent(texto);
      const url = `https://wa.me/584120000000?text=${msg}`;

      const alertBox = document.getElementById('statusAlert');
      if (alertBox) {
        alertBox.classList.remove('hidden');
      }

      setTimeout(function() {
        window.open(url, '_blank');
      }, 700);
    }

// Preselecciona el plan o servicio recibido por query string (?plan=... o ?servicio=...)
(function preseleccionarPlanDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('plan') || params.get('servicio');
  if (!raw) return;

  const select = document.getElementById('input_servicio');
  if (!select) return;

  const normalize = (value) => value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const target = normalize(raw);
  const options = Array.from(select.options);
  let match = options.find((option) => normalize(option.value) === target || normalize(option.textContent) === target);

  if (!match) {
    const tokens = target.replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
    match = options.find((option) => {
      const haystack = normalize(option.value + ' ' + option.textContent);
      return tokens.every((token) => haystack.includes(token));
    });
  }

  if (match) {
    select.value = match.value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
})();
