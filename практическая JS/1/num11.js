function drawRectangle() {
    let width = document.getElementById("one6616").value;

    
    let rectangleDiv = document.getElementsByClassName(".out6vv6");
    let rectangleHTML = '';

    for (let i = 0; i < width; i++) {
      let row = '';
      for (let j = 0; j < width; j++) {
        row += '* ';
      }
      rectangleHTML += row + '<br>';
    }

    rectangleDiv.innerHTML = rectangleHTML;
  }
