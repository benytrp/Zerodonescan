
window.addEventListener('DOMContentLoaded', () => {
  const stored = sessionStorage.getItem('donation_block');
  if (!stored) return;

  const decoded = atob(stored);
  try {
    const parsed = JSON.parse(decoded);
    const phrase = `You carry the contradiction of ${parsed.emotion}.`;
    document.getElementById('essence-reflection').innerText = `🪞 ${phrase}`;
  } catch (e) {
    document.getElementById('essence-reflection').innerText = `🪞 Reflection corrupted.`;
  }
});
