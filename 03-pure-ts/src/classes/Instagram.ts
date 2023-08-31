import TakePhoto from "../interfaces/TakePhoto";
import Gallery from "./abstract/Gallery";

class Instagram extends Gallery implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public isOpen: boolean
  ) {
    super(isOpen);
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burstMode = burstMode;
  }

  getSepia(): void {
    console.info("sepia is actived");
  }
}

export default Instagram;
