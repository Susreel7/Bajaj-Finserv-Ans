const url = 'https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json';
const jsonContainer = document.getElementById('json-container');

fetch(url)
  .then(response => response.json())
  .then(data => {
    displayJson(data, jsonContainer);
  })
  .catch(error => {
    console.log('Error:', error);
  });

function displayJson(data, container) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const element = document.createElement('div');

      const keyElement = document.createElement('span');
      keyElement.classList.add('json-key');
      keyElement.textContent = key + ': ';
      element.appendChild(keyElement);

      if (typeof value === 'object' && !Array.isArray(value)) {
        element.appendChild(document.createTextNode('{'));
        element.appendChild(document.createElement('br'));
        displayJson(value, element);
        element.appendChild(document.createTextNode('}'));
      } else if (Array.isArray(value)) {
        element.appendChild(document.createTextNode('['));
        element.appendChild(document.createElement('br'));
        value.forEach(item => {
          displayJson(item, element);
          element.appendChild(document.createElement('br'));
        });
        element.appendChild(document.createTextNode(']'));
      } else {
        const valueElement = document.createElement('span');
        if (typeof value === 'string') {
          valueElement.classList.add('json-string');
        } else if (typeof value === 'number') {
          valueElement.classList.add('json-number');
        } else if (typeof value === 'boolean') {
          valueElement.classList.add('json-boolean');
        } else if (value === null) {
          valueElement.classList.add('json-null');
        }
        valueElement.textContent = value;
        element.appendChild(valueElement);
      }

      container.appendChild(element);
    }
  }
}
