import styled from 'styled-components';
import Button from '../Button';

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onTurnAllLightsOn, onTurnAllLightsOff }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={() => onTurnAllLightsOff()}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => onTurnAllLightsOn()}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
