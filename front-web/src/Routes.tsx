import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Admin from "./pages/Admin";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/Catalog/components/ProductDetails";
import Home from "./pages/Home/index";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Catalog />
            </Route>
            <Route path="/products/:productId">
                <ProductDetails/>
            </Route>
            <Redirect from="/admin" to="/admin/products" exact/>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
