abstract class Gallery {
  constructor(public isOpen: boolean) {}
  abstract getSepia(): void;
}

export default Gallery;
