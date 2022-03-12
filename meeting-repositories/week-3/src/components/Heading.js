const Heading = ({ color, text, className }) => (
  <h1 className={className}>
    <p>{text}</p>
    Background Color: <span>{color}</span>
  </h1>
);

export default Heading;
