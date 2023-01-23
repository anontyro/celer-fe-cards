import { atom } from "jotai";
import { CardDeck } from "../types/CardDeck";

export const currentDeckAtom = atom<CardDeck>([]);

export const currentUserCardsAtom = atom<CardDeck>([]);
