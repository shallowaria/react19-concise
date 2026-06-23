function AppInput(props) {
  const { type, value, className, setValue } = props;

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
