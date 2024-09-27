function handleClick() {
  console.log("You clicked me!");
}

export default function Square({ value }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
