import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DeliveryMap from './pages/DeliveryMap/DeliveryMap';
import DeliveryPreview from './pages/DeliveryPreview/DeliveryPreview';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="logo">drone drop delivery 📦 </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deliveryPreview" element={<DeliveryPreview />} />
          <Route path="/deliveryMap" element={<DeliveryMap />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
