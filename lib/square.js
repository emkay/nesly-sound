function Square(options) {
    if (!(this instanceof Square)) {
        return new Square(options);
    }

    this.code = prefix + 'square1:\n';
}
