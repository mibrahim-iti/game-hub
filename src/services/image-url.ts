import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return noImage;
  }

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index); // there is an API provided to crop images with needed width and height, that's why we are doing this slicing
};

export default getCroppedImageUrl;
