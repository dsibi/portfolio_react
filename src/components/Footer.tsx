import './Footer.css';
import { IconContext } from 'react-icons/lib';
import { AiOutlineMail } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';

const Footer = () => (
    <IconContext.Provider value={{ color: "#9BD2E0", size: "1.5em" }}>
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="credits">

                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                    <div className="col-sm-6 text-md-right">
                        <a href="mailto:dsibirin@yahoo.com?subject=Request from pf-website">
                            <AiOutlineMail className="footerBnts" /></a>
                        <a href="https://t.me/amid_si">
                            <TbBrandTelegram className="footerBnts" /></a>
                    </div>
                </div>
            </div>
        </footer>
    </IconContext.Provider>
);

export default Footer;

