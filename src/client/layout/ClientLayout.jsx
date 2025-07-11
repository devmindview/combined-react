
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


function ClientLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <Header/>

      <main className="flex-grow mx-auto w-full">
        <Outlet /> 
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default ClientLayout;
