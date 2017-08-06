var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://API_ID.execute-api.API_REGION.amazonaws.com/STAGE/compare-yourself');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'allow');
xhr.send(JSON.stringify({age: 26, height: 71, income: 2100}));