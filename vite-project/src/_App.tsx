import React, { useState } from "react";

function App() {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  const [formData, setFromData] = useState<{ email: string; password: string}>(
    {
      email: '',
      password: '',
    }
  )

  const handleSubmit = (e:
    React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({
        formData
      })
    };

  const handleChange = (e:
    React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFromData({ ...formData, [name]: value });
    };


    // const handleChangeEmail = (e:
    //   React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    //   };
    // const handleChangePassword = (e:
    //   React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value);
    //   };


    return (
      <div className="App">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email">Emali</label>
            <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="password">パスワード</label>
            <input
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
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
