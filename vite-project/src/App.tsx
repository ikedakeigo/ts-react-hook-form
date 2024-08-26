import "./App.css";
import {useForm} from 'react-hook-form'

type FormData = {
  email: string;
  password: string;
}

function App() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const target = e.target as any;
  //   console.log({
  //     email: target.email.value,
  //     password: target.password.value,
  //   });
  // };

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register('email')}/>
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" {...register('password')} type="password"/>
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
