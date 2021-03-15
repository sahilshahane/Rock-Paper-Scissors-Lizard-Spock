import { createContext } from "react";

interface defaultVal {
  gameMode?: "easy" | "hard";
  toEasy: () => void;
  toHard: () => void;
}

const defaultValue: defaultVal = {
  toEasy() {
    this.gameMode = "easy";
  },
  toHard() {
    this.gameMode = "hard";
  },
};

export const Context = createContext({});
export const Provider = (props) => {
  return (
    <Context.Provider value={defaultValue}>{props.children}</Context.Provider>
  );
};
export const toEasy = () => defaultValue.toEasy();
export const toHard = () => defaultValue.toHard();
