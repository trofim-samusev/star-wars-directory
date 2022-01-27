import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PeopleList } from './modules/people';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PeopleList />}>
        {/* <Route path="people" element={<Teams />}>
          <Route path=":id" element={<Team />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
