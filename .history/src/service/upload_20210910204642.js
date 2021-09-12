export default class UploadImage {
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dpvhkp8oq/image/upload";
    this.preset = "yl2sbvbf";
  }

  upload = (image) => {
    const data = image;
    const formdata = new FormData();
    formdata.append("file", data);
    formdata.append("upload_preset", this.preset);

    fetch(this.url, {
      method: "POST",
      body: formdata,
    }).then((response) => {
      console.log(response);
    });
  };
}
