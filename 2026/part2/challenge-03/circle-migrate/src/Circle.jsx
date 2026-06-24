function Circle({ circleClasses, circleStyles, children }) {
  return (
    <div className={`circle ${circleClasses}`} style={circleStyles}>
      {children}
    </div>
  );
}

export default Circle;
