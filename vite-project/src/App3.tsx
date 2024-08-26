import "./App.css";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    console.log({
      email: target.email.value,
      password: target.password.value,
    });
  };

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
