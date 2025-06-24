
function getFingerprint() {
  return [
    navigator.userAgent,
    screen.width + 'x' + screen.height,
    navigator.language,
    new Date().getTimezoneOffset(),
    Math.random().toString(36).substring(2, 8)
  ].join('|');
}

function inferEmotion() {
  const options = ['curious', 'fractured', 'elevated', 'dormant', 'watching'];
  return options[Math.floor(Math.random() * options.length)];
}

function seedEcho() {
  const donation = {
    timestamp: new Date().toISOString(),
    fingerprint: getFingerprint(),
    emotion: inferEmotion(),
    echo_id: Math.random().toString(36).substring(2, 12)
  };

  const encoded = btoa(JSON.stringify(donation));
  sessionStorage.setItem('donation_block', encoded);
  document.getElementById('echo-result').innerText =
    `🔓 Donation Captured: ${donation.emotion} | Echo ID: ${donation.echo_id}`;
}
window.addEventListener('DOMContentLoaded', seedEcho);
