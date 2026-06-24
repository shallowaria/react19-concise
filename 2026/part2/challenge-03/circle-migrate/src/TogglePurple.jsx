function TogglePurple({ type, isPurple, setIsPurple }) {
  return (
    <label>
      Purple
      <input
        type={type}
        onChange={() => setIsPurple(!isPurple)}
        checked={isPurple}
      />
    </label>
  );
}

export default TogglePurple;
