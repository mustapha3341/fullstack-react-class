import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <Counter initialCount={10} step={5} />
    </div>
  );
}

export default App;
