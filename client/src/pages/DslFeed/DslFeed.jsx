import React from 'react';
import Dsfeed from '../../components/dsfeed/Dsfeed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebars from '../../components/sidebars/Sidebars';
import Topbar from '../../components/topbar/Topbar';

const DslFeed = () => {
    return (
        <div className="app">
        <Topbar />
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-0">
            <Sidebars />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <Dsfeed/>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-0">
            <Rightbar className="responsiveright"/>
            </div>
        </div>
    </div>
    );
};

export default DslFeed;