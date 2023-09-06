function MyButton() {
  return (
    <a href="/someplace">
    <button>
      I'm a button
    </button>
    </a>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
