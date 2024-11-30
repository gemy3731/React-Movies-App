import AppContent from "./AppContent";
import Popular from "./Popular";
import TopRated from "./TopRated";
import TrendSlider from "./TrendSlider";
import UpComing from "./UpComing";



export default function Home() {
  return (
    <div>
      <TrendSlider />
      <AppContent />
      <TopRated />
      <Popular />
      <UpComing />
    </div>
  )
}
