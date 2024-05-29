import * as yup from 'yup';

const jpLocale = {
  mixed: {
    required: param => `${param.label}は必須です`,
    oneOf: param => `${param.label}は${param.values}のいずれかでなければなりません`,
  },
  string: {
    length: param =>`${param.label}は${param.length}文字ちょうど出なければいけません`,
    min: param =>`${param.label}は${param.min}文字以上でないといけない`,
    max: param =>`${param.label}は${param.max}文字以下でないといけない`,
    matches: param =>`${param.label}は正数でないといけない`,
    email: param =>`${param.label}はメールアドレス形式でないといけない`,
    url: param =>`${param.label}はURL形式出ないといけない`,
  },
  number: {
    min: param => `${param.label}は${param.min}以上でないといけない`,
    max: param => `${param.label}は${param.max}以下でないといけない`,
    lessThan: param => `${param.label}は${param.less}未満でないといけない`,
    moreThan: param => `${param.label}は${param.more}より大きいでないといけない`,
    positive: param => `${param.label}は正数でないといけない`,
    negative: param => `${param.label}は負数でないといけない`,
    integer: param => `${param.label}は整数でないといけない`,
  },
  date: {
    min: param => `${param.label}は${param.min}より未来でないといけない`,
    max: param => `${param.label}は${param.max}より過去でないといけない`,
  },
};

yup.setLocale(jpLocale);

export default yup;