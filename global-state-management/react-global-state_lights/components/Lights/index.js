import styled from 'styled-components';
import Light from '../Light';

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ light, handleToggle }) {
  return (
    <StyledLights>
      <li>
        <Light name="Living Room" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Kitchen" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Bedroom" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Bathroom" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Garage" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Porch" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Garden" light={light} onToggle={handleToggle} />
      </li>
      <li>
        <Light name="Office" light={light} onToggle={handleToggle} />
      </li>
    </StyledLights>
  );
}
