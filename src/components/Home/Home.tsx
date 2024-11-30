import AppContent from "./AppContent";
import TopRated from "./TopRated";
import TrendSlider from "./TrendSlider";



export default function Home() {
  return (
    <div>
      <TrendSlider />
      <AppContent />
      <TopRated />
    </div>
  )
}
