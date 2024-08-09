import { ReactElement } from "react";
import css from "./Welcome.module.css";

export default function Welcome(): ReactElement {
  return (
    <div className={css.container}>
      <p className={css.text}>We can find any image you want!</p>
    </div>
  );
}
