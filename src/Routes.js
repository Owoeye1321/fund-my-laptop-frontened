import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeEight from './components/HomeEight';
import Login from './components/login';
import Forgetpassword from './components/forgetpassword';
import Signup from './components/signup';
import Service from './components/Service';
import Dashboard from './components/Dashboard';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeEight} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path='/forgetpassword' component={Forgetpassword}/>
                            <Route exact path='/dashboard' component={Dashboard}/>


                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
