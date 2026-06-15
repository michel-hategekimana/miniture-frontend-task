import Hero from "../components/Hero";
import RoomSections from "../components/RoomSections";
import ProductShowcase from "../components/ProductShowcase";
import LivingRoomEvent from "../components/LivingRoomEvent";
import FurnitureFeature from "../components/FurnitureFeature";
import ShopHighlights from "../components/ShopHighlights";
import LifestyleSections from "../components/LifestyleSections";



export default function Home() {
  return (
    <>
      <Hero />
      <RoomSections />
      <ProductShowcase />
      <LivingRoomEvent />
      <FurnitureFeature />
      <ShopHighlights />
      <LifestyleSections />
      
    </>
  );
}
