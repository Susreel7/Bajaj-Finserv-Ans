fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('json-container');
    renderJson(data, container);

    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredData = filterDataByName(data, searchValue);
      container.innerHTML = '';
      renderJson(filteredData, container);
    });

    filterSelect.addEventListener('change', () => {
      const filterValue = filterSelect.value;
      const filteredData = filterDataByDesignation(data, filterValue);
      container.innerHTML = '';
      renderJson(filteredData, container);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

function renderJson(data, container) {
  // Rendering logic remains the same
  // ...
}

function filterDataByName(data, searchValue) {
  const filteredData = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];

      if (typeof value === 'object' && value !== null) {
        filteredData[key] = filterDataByName(value, searchValue);
      } else if (typeof value === 'string' && value.toLowerCase().includes(searchValue)) {
        filteredData[key] = value;
      }
    }
  }

  return filteredData;
}

function filterDataByDesignation(data, filterValue) {
  const filteredData = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];

      if (typeof value === 'object' && value !== null) {
        filteredData[key] = filterDataByDesignation(value, filterValue);
      } else if (key === 'designation' && value === filterValue) {
        filteredData[key] = value;
      }
    }
  }

  return filteredData;
}
