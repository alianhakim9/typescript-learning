class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public short: string
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burstMode = burstMode;
  }
  createStory(): string {
    return "story was created";
  }
}
