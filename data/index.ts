export * from "./types";
export * from "./about";
export * from "./events";
export * from "./markets";
export * from "./menu";

// Optional: merged list for a full FAQ page
import { FAQ_ABOUT } from "./about";
import { FAQ_EVENTS } from "./events";
import { FAQ_MARKETS } from "./markets";
import { FAQ_MENU } from "./menu";

export const FAQ_ALL = [
  ...FAQ_ABOUT,
  ...FAQ_EVENTS,
  ...FAQ_MARKETS,
  ...FAQ_MENU
];
