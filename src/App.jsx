import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  import.meta.env.TOKEN = "akjfdlkafd";

  return (
    <div className="App">
      <h1 className="underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
