import { ReactElement } from "react";

import { Image } from "../../types";

import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

interface Props {
  images: Image[];
  openModal: (image: Image) => void;
}

export default function ImageGallery({
  images,
  openModal,
}: Props): ReactElement {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard openModal={openModal} image={image} />
          </li>
        );
      })}
    </ul>
  );
}
