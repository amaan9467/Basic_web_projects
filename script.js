const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const urlList = document.getElementById('urlList');

let urls = JSON.parse(localStorage.getItem('urls')) || [];

function renderURLs() {
  urlList.innerHTML = '';
  urls.forEach((entry, index) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <a href="${entry.url}" target="_blank">${entry.name}</a>
      <button onclick="deleteURL(${index})">Delete</button>
    `;
    urlList.appendChild(div);
  });
}

function addURL() {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !url || !url.startsWith('http')) {
    alert('Enter a valid name and URL with http/https.');
    return;
  }

  urls.push({ name, url });
  localStorage.setItem('urls', JSON.stringify(urls));
  nameInput.value = '';
  urlInput.value = '';
  renderURLs();
}

function deleteURL(index) {
  urls.splice(index, 1);
  localStorage.setItem('urls', JSON.stringify(urls));
  renderURLs();
}

renderURLs();
