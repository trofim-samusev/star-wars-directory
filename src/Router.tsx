import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PeoplePage, PersonPage } from './modules/people';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="people" element={<PeoplePage />} />
      <Route path="people/:id" element={<PersonPage />} />
      <Route path="*" element={<Navigate to="/people" />} />
    </Routes>
  </BrowserRouter>
);
