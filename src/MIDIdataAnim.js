function MIDIdataAnim(screenEl, data) {
  this.screen = screenEl;
  this.note = data[1];
  this.velocity = data[2];

}
MIDIdataAnim.prototype.midiOn = function() {
  return '[144,'+this.note+','+this.velocity+']';
}
MIDIdataAnim.prototype.midiOff = function() {
  return '[128,'+this.note+','+this.velocity+']';
}
// TODO write linear transform function and test
MIDIdataAnim.prototype.leftPos = function() {
  var leftPos = linearTransform(0, 100, 31, 96);
  return leftPos;
}

MIDIdataAnim.prototype.displayData = function(inner) {
  this.paraEl.innerHTML = inner;
}



