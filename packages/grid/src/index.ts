(() => {
  const $chocoRoot = document.getElementById("choco-grid");
  const $template = document.createElement("div");
  const testHtml = `<div style="color: tomato">dev server </div>`;
  $template.innerHTML = testHtml;

  if (!$chocoRoot) return;
  $chocoRoot.appendChild($template);
})();

export {};
