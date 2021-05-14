import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import ContactsMain from '../components/Contact/ContactsMain';


class CaseThree extends Component {

    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Contact" />
                    {/* breadcrumb-area-start */}
                    {/* Faq */}
                    <ContactsMain />
                    {/* Faq */}
                </main>
                <Footer />
            </React.Fragment>

        );
    }
}

export default CaseThree;