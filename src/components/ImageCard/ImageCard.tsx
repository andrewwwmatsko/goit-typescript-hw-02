import { ReactElement } from "react";

import { Image } from "../../types";

import css from "./ImageCard.module.css";

interface Props {
  image: Image;
  openModal: (image: Image) => void;
}

export default function ImageCard({ image, openModal }: Props): ReactElement {
  const handleClick = () => {
    openModal(image);
  };
  return (
    <div className={css.container} onClick={handleClick}>
      <img src={image.urls.small} alt={image.description} className={css.img} />
    </div>
  );
}
