import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AutomatedFarmingDashboardPage = () => {
  const navigate = useNavigate();
  const redirectToPlantDiseaseDetection = () => {
    navigate("/soil-moisture-monitoring");
  };
  const redirectToCropRecommendation = () => {
    navigate("/temperature-and-humidity-monitor");
  };
  const redirectToEnvironmentImpactOfFoodProduction = () => {
    navigate("/pH-levels-monitoring-in-soil");
  };
  const redirectToPlantGrowthStage = () => {
    navigate("/smart-irrigation-system");
  };
  const redirectToCropYieldPrediction = () => {
    navigate("/automated-fertilizer-recommendation");
  };
  const redirectToFertilizersRecommendation = () => {
    navigate("/automated-farming-budget-calculator");
  };
  const redirectToPestDetection = () => {
    navigate("/farm-designer");
  };
  const redirectToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Box>
      <div>
        <Navbar />
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(wp1886357-agriculture-wallpapers.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md flex flex-col space-y-5">
              <button
                className="btn btn-primary"
                onClick={redirectToPlantDiseaseDetection}
              >
                Soil moisture monitoring
              </button>
              <button
                className="btn btn-primary"
                onClick={redirectToCropRecommendation}
              >
                Temperature and humidity monitor
              </button>
              <button
                className="btn btn-primary"
                onClick={redirectToEnvironmentImpactOfFoodProduction}
              >
                pH levels monitoring in soil
              </button>
              {/* <button
                className="btn btn-primary"
                onClick={redirectToPlantGrowthStage}
              >
                Smart irrigation system (turn on/off water pump based on soil
                moisture level)
              </button> */}
              <button
                className="btn btn-primary"
                onClick={redirectToCropYieldPrediction}
              >
                Automated fertilizer application recommendation (based on
                temperature, humidity & pH)
              </button>
              <button
                className="btn btn-primary"
                onClick={redirectToFertilizersRecommendation}
              >
                Automated farming budget calculator
              </button>
              <button
                className="btn btn-primary"
                onClick={redirectToPestDetection}
              >
                Farm Designer
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Box>
  );
};

export default AutomatedFarmingDashboardPage;
