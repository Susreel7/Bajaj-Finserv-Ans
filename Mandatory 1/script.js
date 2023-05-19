fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data, null, 4));
  })
  .catch(error => {
    console.log('Error:', error);
  });
