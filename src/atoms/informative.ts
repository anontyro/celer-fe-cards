import { atom } from "jotai";

export type InformationAtom = {
  message: string;
};

export const informationAtom = atom<InformationAtom>({
  message: "",
});
