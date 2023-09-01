const createElement = function (data) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
};

const queryWikipedia = function (callback) {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );

  req.onload = function () {
    if (req.status === 200) {
      try {
        const response = JSON.parse(req.responseText);
        const extract =
          response.query.pages[Object.keys(response.query.pages)[0]].extract;
        callback(extract);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("HTTP request failed with status:", req.status);
    }
  };

  req.send();
};

queryWikipedia(createElement);
