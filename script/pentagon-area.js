function calculatePentagonArea() {
  const perimeter = getInputValueById("pentagon-perimeter");
  const apothem = getInputValueById("pentagon-apothem");
  console.log(perimeter, apothem);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
