import { Routes, Route } from "react-router-dom";
import { routes } from "./consts";
import Layout from "../components/layouts/BasicLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
