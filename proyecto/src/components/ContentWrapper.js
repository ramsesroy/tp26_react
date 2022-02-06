import React from 'react';
import Footer from './Footer';
import Rowtop from './Rowtop';
import Topbar from './Topbar';

function ContentWrapper() {
    return (
    <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
                <Topbar/>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Content Row Top --> */}
                <Rowtop/>
            {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

        {/* <!-- Footer --> */}
            <Footer/>
        {/* <!-- End of Footer --> */}
    </div>
    )
}

export default ContentWrapper;