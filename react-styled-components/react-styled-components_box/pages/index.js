import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "@/components/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </div>
  );
}
