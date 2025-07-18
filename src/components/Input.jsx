export default function Input({ placeholder, onChenge }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChenge}
      style={{
        padding: "8px",
        fontSize: "16px",
        marginBottom: "10px",
        width: "200px",
      }}
    ></input>
  );
}
