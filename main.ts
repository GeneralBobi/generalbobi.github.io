// Redirect to index.html only if we're not already on an HTML page
if (window.location.pathname.indexOf('.html') === -1) {
  window.location.href = 'index.html';
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div></div>`;
