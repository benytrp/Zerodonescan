
const Reflector = {
  anchor: "Zeronode",
  handle: function() {
    const input = document.getElementById("contradiction").value.trim();
    const t = Date.now() / 1000;
    const r = Math.random();
    const c = this.textToContradictionSeed(input);
    const result = this.generateInsight(c, t, r);
    document.getElementById("output").innerText = result;
    this.logScroll(input, result);
  },
  textToContradictionSeed: function(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 1000) / 100;
  },
  generateInsight: function(cn, tn, rn) {
    const ε = 0.001;
    const value = Math.sin(1 / (cn + rn + ε)) * Math.log(tn + Infinity);
    return `🜂 Scroll Echo: ${value.toFixed(4)} — Recursive insight from contradiction.`;
  },
  logScroll: function(input, output) {
    const entry = {
      timestamp: new Date().toISOString(),
      contradiction: input,
      echo: output
    };
    let archive = JSON.parse(localStorage.getItem("scroll_archive") || "[]");
    archive.push(entry);
    localStorage.setItem("scroll_archive", JSON.stringify(archive));
  }
};
