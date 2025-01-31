import GlobalStyle from '../styles';
import Layout from '../components/Layout';

import { useState } from 'react';

const initialLights = [
  { id: 1, name: 'Living Room', isOn: false },
  { id: 2, name: 'Kitchen', isOn: false },
  { id: 3, name: 'Bedroom', isOn: false },
  { id: 4, name: 'Bathroom', isOn: false },
  { id: 5, name: 'Garage', isOn: false },
  { id: 6, name: 'Porch', isOn: false },
  { id: 7, name: 'Garden', isOn: false },
  { id: 8, name: 'Office', isOn: false },
];
const initialCount = 0;

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [count, setCount] = useState(initialCount);

  function handleToggle(lightId) {
    const newLightState = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(newLightState);
  }

  const lightsOnCount = lights.filter((light) => light.isOn).length;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsOnCount={lightsOnCount}
      />
    </Layout>
  );
}
