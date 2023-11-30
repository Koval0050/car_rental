import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './style.css';

const HeaderLayout = lazy(() =>
  import('./components/SharedLayout/HeaderLayout')
);
const Loader = lazy(() => import('./components/Loader/Loader'));

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

const Favorite = lazy(() => import('./pages/Favorite/Favorite'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
