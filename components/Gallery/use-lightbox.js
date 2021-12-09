import { useState } from "react";
import Lightbox from "react-image-lightbox";

export default function useLightbox({ images }) {
  const [isOpen, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const LightBox = isOpen
    ? () => (
        <Lightbox
          mainSrc={images[imgIndex]}
          nextSrc={images[(imgIndex + 1) % images.length]}
          prevSrc={images[(imgIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setImgIndex((imgIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
      )
    : () => (<></>);
  return {
    setImgIndex,
    setOpen,
    LightBox,
  };
}
