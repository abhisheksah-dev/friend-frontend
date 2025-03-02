import React from "react";
import ApplicantDashboard from "./components/ApplicantDashboard";
import "./index.css"; // Tailwind CSS import
import RegisterPage from "./components/RegisterPage";
import CredentialPage from "./components/CredentialPage";
import RequestsPage from "./components/RequestsPage";
import ProfileUpdatePage from "./components/ProfileUpdatePage";
import RecordPage from "./components/RecordPage";
import VerificationRequestPage from "./components/VerificationRequestPage";
import VerificationRequestCheckPage from "./components/VerificationRequestCheckPage";
import ProgressSecondPage from "./components/ProgressSecondPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <ApplicantDashboard />
      <RegisterPage />
      <CredentialPage />
      <RequestsPage />
      <ProfileUpdatePage />
      <RecordPage />
      <VerificationRequestPage />
      <VerificationRequestCheckPage />
      <ProgressSecondPage />
      <HomePage />
    </>
  );
}

export default App;
