function AppInput({ type, value, className, setValue }) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default AppInput;
