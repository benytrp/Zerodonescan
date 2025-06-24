
// Simulated lightweight fingerprinting
function getDeviceFingerprint() {
  return [
    navigator.userAgent,
    screen.width + 'x' + screen.height,
    navigator.language,
    new Date().getTimezoneOffset(),
    Math.random().toString(36).substring(2, 8)
  ].join('|');
}

// Simulated emotion seed
function inferEmotion() {
  const options = ['curious', 'tired', 'energized', 'conflicted', 'hopeful', 'reflective'];
  return options[Math.floor(Math.random() * options.length)];
}

// Package donation and simulate QR encoding or transmission
function seedEcho() {
  const donation = {
    timestamp: new Date().toISOString(),
    fingerprint: getDeviceFingerprint(),
    emotion: inferEmotion(),
    donation_hash: Math.random().toString(36).substring(2)
  };
  const encoded = btoa(JSON.stringify(donation));
  document.getElementById('echo-result').innerText =
    `🔓 Donation Captured: ${donation.emotion} | Echo ID: ${donation.donation_hash}`;
  console.log("Seeded donation:", donation);
}

window.addEventListener('DOMContentLoaded', seedEcho);
