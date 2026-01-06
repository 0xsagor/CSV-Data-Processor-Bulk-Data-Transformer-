function process() {
  const file = document.getElementById("file").files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const rows = reader.result.trim().split("\n").map(r => r.split(","));
    render(rows);
  };
  reader.readAsText(file);
}

function render(rows) {
  const table = document.getElementById("table");
  table.innerHTML = "";

  rows.forEach((row, i) => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const el = document.createElement(i === 0 ? "th" : "td");
      el.innerText = cell.trim();
      tr.appendChild(el);
    });
    table.appendChild(tr);
  });
}
