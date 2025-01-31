import { LightButton, Icon, Text, Name, State } from './Light.styled';

export default function Light({ light, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(light.id);
        onToggle(light.id);
      }}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? 'On' : 'Off'}</State>
      </Text>
    </LightButton>
  );
}
