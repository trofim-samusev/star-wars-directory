import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PeoplePage } from './modules/people';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/people" element={<PeoplePage />}>
        {/* <Route path="people" element={<Teams />}>
          <Route path=":id" element={<Team />} />
        </Route> */}
      </Route>
      <Route path="*" element={<Navigate to="/people" />} />
    </Routes>
  </BrowserRouter>
);
