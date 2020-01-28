import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomeView from './views/home/HomeView.jsx'

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={HomeView} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Router