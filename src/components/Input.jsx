export default function Input({ placeholder, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: "8px",
        fontSize: "16px",
        marginBottom: "10px",
        width: "200px",
      }}
    ></input>
  );
}
