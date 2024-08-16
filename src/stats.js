export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>add some items to your list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "100 % packed, You are ready to go your travel"
          : `you have ${numItems} items on your list and you already packed
            ${numPacked} (${numPercent}%)`}
      </em>
    </footer>
  );
}
