import { ReactElement } from "react";
import css from "./LoadMoreBtn.module.css";

interface Props {
  onAddMore: () => void;
}

export default function LoadMoreBtn({ onAddMore }: Props): ReactElement {
  return (
    <button className={css.btn} onClick={onAddMore}>
      Load more
    </button>
  );
}
