module.exports = class Dot {
  construtor(
    position,
    isTrap
  ) {
    this.position = position;
    this.isTrap = isTrap;
    this.dead = false;
  }
}
