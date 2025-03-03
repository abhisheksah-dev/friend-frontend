import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FeaturesSection from "./FeaturesSection";
import ImageSlider from "./ImageSlider";
import ExploreSection from "./ExploreSection";

function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content: 80vh (hero) + 20vh (black bar) */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: 80vh Hero */}
        <section className="h-[70vh] flex items-center justify-center px-6">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
            {/* Left Column: Text */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl font-bold mb-4">CRYPTO CURRENCY</h1>
              <p className="text-gray-300 mb-6">
                Explicabo esse amet tempora quisquam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus impedit modi impedit sequi.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>

            {/* Right Column: Moving Image */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-md h-64">
                <img
                  src="/slider-img.png"
                  alt="Crypto Illustration"
                  className="absolute animate-float-up-down"
                  style={{
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 20vh Black Bar with Text */}
        <section className="h-[10vh] bg-gray-800 flex items-center justify-center">
          <h2 className="text-center text-lg md:text-xl px-4">
            In a world of claims, authenticity is the currency that matters.
          </h2>
        </section>
      </main>

      {/* NEW SECTION: "What We Provide?" */}
      <section className="bg-gray-900">
        <FeaturesSection />
      </section>
      {/* NEW: Full Screen Image Slider */}
      <section className="w-full h-[90%]">
        <ImageSlider />
      </section>
      {/* New Explore Section */}
      <section>
        <ExploreSection />
      </section>
      {/* Section 2: 20vh Black Bar with Text */}
      <section className="h-[10vh] bg-gray-900 flex items-center justify-center">
        <h2 className="text-center text-lg md:text-xl px-4">
          In a world of claims, authenticity is the currency that matters.
        </h2>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
