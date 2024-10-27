import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import CropRecommendationPage from "./pages/CropRecommendationPage";
import CropYieldPredictionPage from "./pages/CropYieldPredictionPage";
import DashboardPage from "./pages/DashboardPage";
import EnvironmentImpactOfFoodProductionPage from "./pages/EnvironmentImpactOfFoodProductionPage";
import FarmDesignerPage from "./pages/FarmDesignerPage";
import FertilizersRecommendationPage from "./pages/FertilizersRecommendationPage";
import PestDetectionPage from "./pages/PestDetectionPage";
import PlantDiseaseDetectionPage from "./pages/PlantDiseaseDetectionPage";
import PlantGrowthStagePage from "./pages/PlantGrowthStagePage";

import AutomatedFarmingDashboardPage from "./pages/AutomatedFarmingDashboardPage.jsx";
import BudgetPage from "./pages/BudgetPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PHLevelsMonitoringInSoilPagejsx from "./pages/PHLevelsMonitoringInSoilPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SoilMoistureMonitoringPage from "./pages/SoilMoistureMonitoringPage.jsx";
import TemperatureAndHumidityMonitorPage from "./pages/TemperatureAndHumidityMonitorPage.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import AutomatedFertilizer from "./pages/dashboard/AutomatedFertilizer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route
        path="plant-disease-detection"
        element={<PlantDiseaseDetectionPage />}
      />
      <Route path="crop-recommendation" element={<CropRecommendationPage />} />
      <Route
        path="environment-impact-of-food-production"
        element={<EnvironmentImpactOfFoodProductionPage />}
      />
      <Route path="plant-growth-stage" element={<PlantGrowthStagePage />} />
      <Route
        path="crop-yield-prediction"
        element={<CropYieldPredictionPage />}
      />
      <Route
        path="fertilizers-recommendation"
        element={<FertilizersRecommendationPage />}
      />
      <Route path="pest-detection" element={<PestDetectionPage />} />
      <Route path="/farm-designer" element={<FarmDesignerPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route
        path="/automated-farming-dashboard"
        element={<AutomatedFarmingDashboardPage />}
      />
      <Route
        path="/soil-moisture-monitoring"
        element={<SoilMoistureMonitoringPage />}
      />
      <Route
        path="/temperature-and-humidity-monitor"
        element={<TemperatureAndHumidityMonitorPage />}
      />
      <Route
        path="/pH-levels-monitoring-in-soil"
        element={<PHLevelsMonitoringInSoilPagejsx />}
      />
      <Route
        path="/automated-fertilizer-recommendation"
        element={<AutomatedFertilizer />}
      />
      <Route
        path="/automated-farming-budget-calculator"
        element={<BudgetPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
