import NavBar from "../components/Navbar";
import SubNav from "../components/SubNav";
import ProductGrid from "../components/ProductGrid";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#E3E6E6", minHeight: "100vh" }}>
      <NavBar />
      <SubNav />
      <Slider />
      <ProductGrid />
    </div>
  );
}
