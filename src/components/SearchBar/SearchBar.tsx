import { FormEvent, ReactElement } from "react";

import toast, { Toaster } from "react-hot-toast";

import { RiSearchLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";

import css from "./SearchBar.module.css";

const notify = (): string =>
  toast.error("Please enter your query.", {
    duration: 2000,
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

interface Props {
  onSearch: (query: string) => void;
  onShowFav: () => void;
}

export default function SearchBar({
  onSearch,
  onShowFav,
}: Props): ReactElement {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const inputValue: string = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim();

    if (inputValue === "") {
      notify();
      return;
    }

    onSearch(inputValue);

    (e.target as HTMLFormElement).reset();
  };

  const handleShowFav = () => {
    onShowFav();
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a href="./index.html" className={css.logo}>
          Image<span className={css.colorLogo}>Gall</span>
        </a>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.formContainer}>
            <input
              className={css.search}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
            />
            <button type="submit" className={css.btn}>
              <RiSearchLine size={22} color="white" />
            </button>
          </div>
        </form>
        <button type="button" className={css.favBtn} onClick={handleShowFav}>
          <RiStarFill size={28} color="white" />
          Favourites
        </button>
      </div>
    </header>
  );
}
