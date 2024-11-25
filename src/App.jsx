import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import SectionPage from "./SectionPage";
import Section from "./Section";
import PaymentDetails from "./Payment/payment-details";
import FAQDetails from "./FAQ/FAQDetails";
import Promacions from "./Promotions/Promacions";
import Private from "./Privacy&Security/Private";
import Aboutus from "./About/Aboutus";
import Profile from "./Profile/profile";
import HistoryPage from "./HistoryUser/HistoryPage";
import Informationapp from "./Accountinfo/Informationapp";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Driverhistory from "./HistoryDriver/Driverhistory";
import Prodriver from "./Prodriver/Prodriver"; 
import SlideMeForm from "./SlideMeForm/SlideMeForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <MainContent />
        <FooterLink />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div style={formContainerStyle}>
              <Section title="Email" />
              <Section title="Subject" />
              <Section title="For order Number" />
              <Section
                title="Type"
                hasDropdown
                options={[
                  "Convertible",
                  "Coupe",
                  "Electric Vehicle (EV)",
                  "Hatchback",
                  "Luxury Car",
                  "Minivan",
                  "Pickup Truck",
                  "Sedan",
                  "SUV",
                  "Wagon",
                ]}
              />
              <Section
                title="I'm the..."
                hasDropdown
                options={["User", "Driver"]}
              />
              <Section title="Description" isDescription />
            </div>
          }
        />
        <Route path="/section" element={<SectionPage />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/FAQDetails" element={<FAQDetails />} />
        <Route path="/Promacions" element={<Promacions />} />
        <Route path="/Private" element={<Private />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Informationapp" element={<Informationapp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/driverhis" element={<Driverhistory />} />
        <Route path="/prodriver" element={<Prodriver />} /> 
        <Route path="/slideMeForm" element={<SlideMeForm />} /> 
      </Routes>

      {location.pathname === "/" && (
        <div style={formContainerStyle}>
          <h5 style={headingStyle}>
            Please enter the details of your request, and we will respond
          </h5>
          <h5 style={headingStyle}>as soon as possible</h5>
          <h5 style={headingStyle}>Attachments</h5>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("Selected file:", file);
            }}
          />
          <label htmlFor="file-upload" style={fileUploadButtonStyle}>
            Add File
          </label>
          <label htmlFor="submit" style={submitButtonStyle}>
            Submit
          </label>
          <input className="submit-container" type="submit" id="submit" style={{ display: "none" }} />
        </div>
      )}
    </div>
  );
}

function FooterLink() {
  return (
    <Link to="/history" style={footerLinkStyle}>
      <Footer />
    </Link>
  );
}

const footerLinkStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column", 
  alignItems: "flex-start",
  marginLeft: "5px",
  width: "100%",
  maxWidth: "1500px",
  gap: "20px", 
  marginTop: "80px",
};

const headingStyle = {
  marginBottom: "5px",
  wordWrap: "break-word",
  marginLeft: "5px",
  marginTop: "-10px",
};

const fileUploadButtonStyle = {
  display: "inline-block",
  padding: "10px 20px",
  color: "green",
  border: "2px solid #2EA366",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "-5px",
  textAlign: "center",
  marginLeft: "2px",
  marginRight: "20px",
  width: "340px",
};

const submitButtonStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#2EA366",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "-10px", 
  textAlign: "center",
  marginLeft: "3px",
  marginBottom: "5px",
  width: "340px",
};

export default App;
