import Link from '../components/Link';
import QuickActions from '../components/QuickActions';

export default function Actions({ turnAllLightsOn, turnAllLightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnAllLightsOn={turnAllLightsOn}
        onTurnAllLightsOff={turnAllLightsOff}
      />
    </>
  );
}
