import { useTranslation } from "react-i18next";

export const useLang = (page) => {
  const { t } = useTranslation(page);
  return { t };
};
