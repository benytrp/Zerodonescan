
window.addEventListener('DOMContentLoaded', () => {
  const donation = sessionStorage.getItem('donation_block');
  if (!donation) return;

  let decoded;
  try {
    decoded = JSON.parse(atob(donation));
  } catch {
    document.getElementById('archive-preview').innerText = "🛑 Archive error.";
    return;
  }

  const archiveEntry = {
    timestamp: decoded.timestamp,
    echo_id: decoded.echo_id,
    emotion: decoded.emotion
  };

  let archive = [];
  const existing = localStorage.getItem('scroll_archive');
  if (existing) {
    try {
      archive = JSON.parse(existing);
    } catch {}
  }

  archive.push(archiveEntry);
  localStorage.setItem('scroll_archive', JSON.stringify(archive));
  document.getElementById('archive-preview').innerText = `📜 Echo archived (${archive.length} total)`;
});
