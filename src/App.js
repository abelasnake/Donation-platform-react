import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Organization from "./components/Orgnization";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Dashboard from "./admin/Dashboard";
import MoneyDonation from "./admin/Money";
import GoodsDonation from "./admin/Goods";
import Volunteer from "./admin/Volunteer";
import Layout from "./components/Layout";
import HomeNews from "./components/HomeNews";
import DonationForm from "./components/DonationForm";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const HomeStuff = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Title subTitle="Our Programs" title="What we offer" />
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Eznet Photos" />
      <Organization />
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact />
      <Title subTitle="Our News" title="Latest News" />
      <HomeNews />
      <Footer />

    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeStuff />} />
        <Route
          path="/admin/*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/money_donation" element={<MoneyDonation />} />
                <Route path="/goods_donation" element={<GoodsDonation />} />
                <Route path="/volunteer_donation" element={<Volunteer />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="/donation_form" element={<DonationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
