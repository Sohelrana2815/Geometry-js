function calculateEllipseArea() {
  const majorRadius = getInputValueById("ellipse-major-redus");
  const minorRadius = getInputValueById("ellipse-minor-redus");
  const area = 3.1416 * majorRadius * minorRadius;
  setInnerTextById("ellipse-area", area);
}
