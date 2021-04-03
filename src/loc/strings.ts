import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

import { enStrings } from "./en-us";
import { nlStrings } from "./nl-be";

export interface IStrings extends LocalizedStringsMethods {
  MY_GREETING: string;
  USER_PROFILE_LOCALIZATION_LABEL;
}

export const strings: IStrings = new LocalizedStrings({
  en: enStrings,
  nl: nlStrings
});
