function filtrarCategoria(cat) {
      const cards = document.querySelectorAll('.plan-card');
      const tabs = ['todos', 'pymes', 'corporativo'];
      
      tabs.forEach(t => {
        const btn = document.getElementById('tab-' + t);
        if (btn) {
          if (t === cat) {
            btn.className = "px-5 py-2.5 rounded-full bg-brand-blue text-light-on-primary font-label text-label-md font-bold shadow-sm transition-all";
          } else {
            btn.className = "px-5 py-2.5 rounded-full bg-light-surface border border-light-outline text-light-primary hover:border-brand-blue font-label text-label-md transition-all";
          }
        }
      });

      cards.forEach(card => {
        if (cat === 'todos' || card.getAttribute('data-category') === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
