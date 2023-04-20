import React from 'react';
import { Header, AffiliateSection, PartnerSection, EventsSection, Footer } from './containers';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <AffiliateSection />
        <PartnerSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
