import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

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
        {/* dont need this state? */}

        {/* <State>{isOn ? "On" : "Off"}</State> */}
        <State>{$isOn={light.isOn} ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
