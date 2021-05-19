import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceOneMain from "../components/ServiceOne/ServiceOneMain";

class Brand extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Brand Page Example" />
                <ServiceOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Brand;