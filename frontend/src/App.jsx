import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Loader from "./components/Common/Loader";
import PublicRoute from "./components/Routes/PublicRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

const Body = lazy(() => import("./components/Common/Body"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Feed = lazy(() => import("./pages/Feed"));
const Profile = lazy(() => import("./pages/Profile"));
const Requests = lazy(() => import("./pages/Requests"));
const Connections = lazy(() => import("./pages/Connections"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route
                    path="/"
                    element={<Body />}>
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <Home />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <PublicRoute>
                                <Signup />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/feed"
                        element={
                            <ProtectedRoute>
                                <Feed />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/requests"
                        element={
                            <ProtectedRoute>
                                <Requests />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/connections"
                        element={
                            <ProtectedRoute>
                                <Connections />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/chat/:userId"
                        element={
                            <ProtectedRoute>
                                <Chat />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
