/**
 * objective : get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step1: get base value of the triangle
 * step2: added an id in the base input field
 *step3: use getElementById to access the input field
 *step4: get value from the input field. (value is string now)
 *ste5: convert the value to a number. use parseFloat
 *
 */

function calculateTriandleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);
  //get  triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);
  //calculate triangle area
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);

  //display Triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}
