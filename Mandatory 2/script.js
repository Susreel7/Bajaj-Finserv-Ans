fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('json-container');
    renderJson(data, container);
  })
  .catch(error => {
    console.log('Error:', error);
  });

function renderJson(data, container) {
  const keys = Object.keys(data);

  const ulElement = document.createElement('ul');
  container.appendChild(ulElement);

  keys.forEach(key => {
    const value = data[key];
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const keyElement = document.createElement('span');
    keyElement.classList.add('json-key');
    keyElement.textContent = key;
    liElement.appendChild(keyElement);

    const valueElement = document.createElement('span');
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        valueElement.classList.add('json-array');
        valueElement.textContent = '[Array]';
        liElement.appendChild(valueElement);
        renderJsonArray(value, liElement);
      } else {
        valueElement.classList.add('json-object');
        valueElement.textContent = '{Object}';
        liElement.appendChild(valueElement);
        renderJsonObject(value, liElement);
      }
    } else {
      valueElement.classList.add(getDataTypeClass(value));
      valueElement.textContent = formatValue(value);
      liElement.appendChild(valueElement);
    }
  });
}

function renderJsonArray(array, container) {
  const ulElement = document.createElement('ul');
  container.appendChild(ulElement);

  array.forEach(item => {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const valueElement = document.createElement('span');
    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item)) {
        valueElement.classList.add('json-array');
        valueElement.textContent = '[Array]';
        liElement.appendChild(valueElement);
        renderJsonArray(item, liElement);
      } else {
        valueElement.classList.add('json-object');
        valueElement.textContent = '{Object}';
        liElement.appendChild(valueElement);
        renderJsonObject(item, liElement);
      }
    } else {
      valueElement.classList.add(getDataTypeClass(item));
      valueElement.textContent = formatValue(item);
      liElement.appendChild(valueElement);
    }
  });
}

function renderJsonObject(obj, container) {
  const keys = Object.keys(obj);

  const ulElement = document.createElement('ul');
  container.appendChild(ulElement);

  keys.forEach(key => {
    const value = obj[key];
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const keyElement = document.createElement('span');
    keyElement.classList.add('json-key');
    keyElement.textContent = key;
    liElement.appendChild(keyElement);

    const valueElement = document.createElement('span');
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        valueElement.classList.add('json-array');
        valueElement.textContent = '[Array]';
        liElement.appendChild(valueElement);
        renderJsonArray(value, liElement);
      } else {
        valueElement.classList.add('json-object');
        valueElement.textContent = '{Object}';
        liElement.appendChild(valueElement);
        renderJsonObject(value, liElement);
      }
    } else {
      valueElement.classList.add(getDataTypeClass(value));
      valueElement.textContent = formatValue(value);
      liElement.appendChild(valueElement);
    }
  });
}

function getDataTypeClass(value) {
  if (typeof value === 'string') {
    return 'json-string';
  } else if (typeof value === 'number') {
    return 'json-number';
  } else if (typeof value === 'boolean') {
    return 'json-boolean';
  } else if (value === null) {
    return 'json-null';
  }
}

function formatValue(value) {
  if (typeof value === 'string') {
    return `"${value}"`;
  } else {
    return value;
  }
}
