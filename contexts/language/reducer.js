import localeId from "../../shared/locale.id";
import localeEn from "../../shared/locale.en";
import transform from "../../shared/locale";

const id = transform(localeId);
const en = transform(localeEn);

export const reducer = (state, action) => {
  switch (action.type) {
    case "change_lang":
      return {
        ...state,
        lang: action.lang,
        locale: action.lang === "id" ? id : en,
      };

    default:
      return state;
  }
};

export const initialState = {
  lang: "id",
  locale: id,
};
