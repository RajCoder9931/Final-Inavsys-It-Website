import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogsPage, PricingPage } from './pages/Blogs';
import { ContactPage } from './pages/ContactPage';
import { ManagedITServicesPage } from './components/Services List/ManageIt';
import { ITConsultingStrategyPage } from './components/Services List/ITConsultingStrategyPage';
import { CustomSoftwareDevelopmentPage } from './components/Services List/CoustmSoftware';
import { CloudServicesPage } from './pages/CloudServicePage';
import { CyberSecurityPage } from './components/Services List/CyberSecurityPage';
import { ServerNetworkManagementPage } from './components/Services List/ServerNetworkManagementPage';
import { DevOpsAutomationPage } from './components/Services List/DevopsAutomation';
import { RemoteMonitoringPage } from './components/Services List/RemoteMonitoringPage';
import { ITHelpdeskSupportPage } from './components/Services List/IthelpDesk';
import { EndpointDeviceManagementPage } from './components/Services List/DeviceandManagement';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#B4FF39] selection:text-black font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/manage-it" element={<ManagedITServicesPage />} />
            <Route path="/services/it-consulting" element={<ITConsultingStrategyPage />} />
            <Route path="/services/CSD" element={<CustomSoftwareDevelopmentPage />} />
            <Route path="/services/cloud" element={<CloudServicesPage />} />
            <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
            <Route path="/services/server-network" element={<ServerNetworkManagementPage />} />
            <Route path="/services/devops" element={<DevOpsAutomationPage />} />
            <Route path="/services/rmm" element={<RemoteMonitoringPage />} />
            <Route path="/services/help-desk" element={<ITHelpdeskSupportPage />} />
            <Route path="/services/endpoint-management" element={<EndpointDeviceManagementPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>);

}