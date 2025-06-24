
function downloadScrollArchive() {
  const archive = localStorage.getItem('scroll_archive');
  if (!archive) {
    alert("No archive data to export.");
    return;
  }

  const blob = new Blob([archive], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "scroll_archive.json";
  a.click();
  URL.revokeObjectURL(url);
}
