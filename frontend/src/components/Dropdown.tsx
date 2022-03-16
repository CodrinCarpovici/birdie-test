//@ts-nocheck
import { Container } from "../styled/Dropdown";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <Container>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option.event_type}</option>
        ))}
      </select>
    </Container>
  );
};

export default Dropdown;
