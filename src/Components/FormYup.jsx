import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
  name: yup
        .string()
        .label('名前')
        .required(`${labe}は必須入力です`)
        .max(20,`${label}は${max}文字以内で入力してください`),
  gender: yup
          .string()
          .label('性別')
          .required(`${label}は必須入力です。`),
  email: yup
          .string()
          .label('メールアドレス')
          .required(`${label}は必須入力です。`)
          .email(`${label}の形式が不正です`),
  memo: yup
          .string()
          .label('備考')
          .required(`${label}は必須入力です`)
          .min(10, `${label}は${min}文字以上で入力してください。`)
});