
function rgb2int(r,g,b) {
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;
  return r | g << 8 | b << 16
}
// RGB => Number:
function rgb2int(r,g,b) {
  return parseInt(r.toString(16) + g.toString(16) + b.toString(16), 16)
}
// RGB => HEX
function rgb2hex(r,g,b) {
  return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}