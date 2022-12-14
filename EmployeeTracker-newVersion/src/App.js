import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddEmployee from "./pages/addEmployee/AddEmployee";
import PrivateRoutes from "./routes/PrivateRoutes";
import PromoteEmployee from "./pages/promoteEmployee/PromoteEmployee";
import ExitEmployee from "./pages/exitEmployee/ExitEmployee";
import Finance from "./components/finance/Finance";
import ClientDomestic from "./pages/clientDomestic/ClientDomestic";
import InternalDomestic from "./pages/internalDomestic/InternalDomestic";
import ClientInternational from "./pages/clientinternational/ClientInternational";
import InternalInternational from "./pages/internalInternational/InternalInternational";
import MD from "./pages/md/MD";
import Manager from "./pages/manager/Manager";
import AddClientDetails from "./pages/addClientDetails/AddClientDetails";
import Lead from "./pages/lead/Lead";
import { GeneralManager } from "./pages/generalmanager/GeneralManager";
import { Ch } from "./pages/ch/Ch";
import AddClientNames from "./pages/addClientNames/AddClientNames";
import Register from "./pages/register/Register";
import AddDepartment from "./pages/addDepartment/AddDepartment";
import { AddSubDepartment } from "./pages/addSubDepartment/AddSubDepartment";
import { AddDesignation } from "./pages/addDesignation/AddDesignation";
import { AddEmpType } from "./pages/addEmpType/AddEmpType";
import { AddAddressType } from "./pages/addAddressType/AddAddressType";
import UpdateSupervisor from "./pages/updateSupervisor/UpdateSupervisor";
import { UpdateDesignation } from "./pages/updateDesignation/UpdateDesignation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/hr">
            <Route
              index
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            />

            <Route
              path="register"
              element={
                <PrivateRoutes>
                  <Register />
                </PrivateRoutes>
              }
            />

            <Route
              path="addEmployee"
              element={
                <PrivateRoutes>
                  <AddEmployee />
                </PrivateRoutes>
              }
            />

            <Route
              path="addDepartment"
              element={
                <PrivateRoutes>
                  <AddDepartment />
                </PrivateRoutes>
              }
            />
            <Route
              path="addSubDepartment"
              element={
                <PrivateRoutes>
                  <AddSubDepartment />
                </PrivateRoutes>
              }
            />
            <Route
              path="addDesignation"
              element={
                <PrivateRoutes>
                  <AddDesignation />
                </PrivateRoutes>
              }
            />
            <Route
              path="addAddressType"
              element={
                <PrivateRoutes>
                  <AddAddressType />
                </PrivateRoutes>
              }
            />
            <Route
              path="updateDesignation"
              element={
                <PrivateRoutes>
                  <UpdateDesignation />
                </PrivateRoutes>
              }
            />
            <Route
              path="addEmpType"
              element={
                <PrivateRoutes>
                  <AddEmpType />
                </PrivateRoutes>
              }
            />
            <Route
              path="promoteEmployee"
              element={
                <PrivateRoutes>
                  <PromoteEmployee />
                </PrivateRoutes>
              }
            />
            <Route
              path="exitEmployee"
              element={
                <PrivateRoutes>
                  <ExitEmployee />
                </PrivateRoutes>
              }
            />
            <Route
              path="updateSupervisorId"
              element={
                <PrivateRoutes>
                  <UpdateSupervisor />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route path="/finance">
            <Route
              index
              element={
                <PrivateRoutes>
                  <Finance />
                </PrivateRoutes>
              }
            />
            <Route
              path="clientDomestic"
              element={
                <PrivateRoutes>
                  <ClientDomestic />
                </PrivateRoutes>
              }
            />
            <Route
              path="internalDomestic"
              element={
                <PrivateRoutes>
                  <InternalDomestic />
                </PrivateRoutes>
              }
            />
            <Route
              path="clientInternational"
              element={
                <PrivateRoutes>
                  <ClientInternational />
                </PrivateRoutes>
              }
            />
            <Route
              path="internalInternational"
              element={
                <PrivateRoutes>
                  <InternalInternational />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route
            path="/md"
            element={
              <PrivateRoutes>
                <MD />
              </PrivateRoutes>
            }
          />
          <Route path="/manager">
            <Route
              index
              element={
                <PrivateRoutes>
                  <Manager />
                </PrivateRoutes>
              }
            />
            <Route
              path="addClientDetails"
              element={
                <PrivateRoutes>
                  <AddClientDetails />
                </PrivateRoutes>
              }
            />
            <Route
              path="addClientNames"
              element={
                <PrivateRoutes>
                  <AddClientNames />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route
            path="/lead"
            element={
              <PrivateRoutes>
                <Lead />
              </PrivateRoutes>
            }
          />
          <Route
            path="/general_manager"
            element={
              <PrivateRoutes>
                <GeneralManager />
              </PrivateRoutes>
            }
          />
          <Route
            path="/ch"
            element={
              <PrivateRoutes>
                <Ch />
              </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
