import "./App.css";

function App() {
  const num = 10;
  const double = function (number) {
    return number * 2;
  };

  return (
    <>
      <div className="app">{num}</div>
      <>{double(250)}</>
      <button onClick={double}>클릭</button>
    </>
  );
}

export default App;
