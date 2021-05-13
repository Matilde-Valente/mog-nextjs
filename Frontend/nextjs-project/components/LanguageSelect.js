import {Select} from "antd";
import {useRouter} from "next/router";
import Link from "next/link";
import {i18n} from "../next.config";
const {Option} = Select;

const LanguageSelect = () => {
  const {asPath, locale} = useRouter();
  const {locales} = i18n;

  return (
    <Select value={locale}>
      {locales.map((lang) => {
        return (
          <Option value={lang} key={lang}>
            <Link href={asPath} locale={lang}>
              {lang}
            </Link>
          </Option>
        );
      })}
    </Select>
  );
};
export default LanguageSelect;
