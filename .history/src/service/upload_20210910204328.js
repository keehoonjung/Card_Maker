class UploadImage {
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dpvhkp8oq/image/upload";
    this.preset = "yl2sbvbf";
    this.formdata = new FormData();
  }

  upload = (image) => {
    const image = image;
  };
}
