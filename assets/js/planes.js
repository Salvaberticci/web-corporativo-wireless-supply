function filtrarCategoria(cat) {
  const cards = document.querySelectorAll('.plan-card');
  const tabs = ['todos', 'pymes', 'corporativo'];

  tabs.forEach(function (t) {
    const btn = document.getElementById('tab-' + t);
    if (!btn) return;

    const active = t === cat;
    btn.className = active
      ? 'inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-full bg-brand-blue text-light-on-primary font-label text-label-md font-bold shadow-sm transition-all'
      : 'inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-full bg-light-surface border border-light-outline text-light-primary hover:border-brand-blue font-label text-label-md transition-all';
    btn.setAttribute('aria-pressed', String(active));
  });

  cards.forEach(function (card) {
    const visible = cat === 'todos' || card.getAttribute('data-category') === cat;
    card.classList.toggle('hidden', !visible);
  });
}
