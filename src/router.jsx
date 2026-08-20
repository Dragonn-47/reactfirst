import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Login  from "./pages/Login";
import Cart from "./pages/Cart";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path:"", element: <Home /> },
            {path:"Products", element: <Products /> },
            {path:"Login", element: <Login /> },
            {path:"Cart", element: <Cart /> },
        ]
    }
]);

export default router;