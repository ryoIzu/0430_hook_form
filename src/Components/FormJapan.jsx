import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from './yup.jp.js';

yup.addMethod(yup.string, 'ng', function(){
  return this.test('ng',
    ({label}) => `${label}にNGワードが含まれています。`,
    value => {
      const ngs = ['パワハラ', 'セクハラ', 'モラハラ'];
      for(const ng of ngs) {
        if(value.includes(ng)) {
          return false;
        }
      }
      return true;
    }
  );
});

const schema = yup.object({
  name: yup
        .string()
        .label('名前')
        .required()
        .max(20),
  gender: yup
          .string()
          .label('性別')
          .required(),
  email: yup
          .string()
          .label('メールアドレス')
          .required()
          .email(),
  memo: yup
          .string()
          .label('備考')
          .required()
          .min(10)
          .ng()
});

export default function FormYup() {
  const {register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      name: '出田',
      email: 'admin@example.com',
      gender: 'male',
      memo: 'メモです！'
    },
    //yupに検証を委ねる
    resolver: yupResolver(schema),
  });

  const onsubmit = data => console.log(data);
  const onerror = err => console.log(err);

  return(
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前</label><br/>
        <input id="name" type="text"
          {...register('name')}/>
        <div>{errors.name?.message}</div>
      </div>

      <div>
        <label htmlFor="gender">性別</label><br/>
        <label>
          <input value="male" type="radio"
            {...register('gender')}/>男子
        </label>
        <label>
          <input value="female" type="radio"
          {...register('gender')}/>女子
          </label>
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス</label><br/>
        <label>
          <input id="email" type="email"
            {...register('email')}/>
        </label>
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考</label>
        <textarea id="memo"
                  {...register('memo')} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button> 
      </div>
    </form>
  );
}