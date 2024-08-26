import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  // const handleSubmit = (e:
  //   React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log({
  //       email,
  //       password,
  //     })
  //   };


  //   const handleChangeEmail = (e:
  //     React.ChangeEvent<HTMLInputElement>) => {
  //       setEmail(e.target.value);
  //     };
  //   const handleChangePassword = (e:
  //     React.ChangeEvent<HTMLInputElement>) => {
  //       setPassword(e.target.value);
  //     };
  // type F = (repeatNum: number) => string;
  // const xRepeat: F = (num: number): string => "x".repeat(num);

  // xRepeat(


    return (
      <div className="App">
        <h1>ログイン</h1>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log({
            email,
            password,
          })
        }}>
          <div className="">
            <label htmlFor="email">Emali</label>
            <input
            id="email"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            />
          </div>
          <div className="">
            <label htmlFor="password">パスワード</label>
            <input
            id="password"
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            type="password"
            />
          </div>
          <div className="">
            <button type="submit">
              ログイン
            </button>
          </div>
        </form>
      </div>
    )
};

export default App;
