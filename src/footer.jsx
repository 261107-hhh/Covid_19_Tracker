import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <>

            <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>

                <div className="container pt-4">
                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-lg text-dark "
                            href="https://www.worldometers.info/coronavirus/"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferrer"
                        ><i className="fab fa-google"></i
                        ><PublicIcon /></a>

                        <a
                           className="btn btn-link btn-lg text-dark "
                            href="https://www.facebook.com/MyGovIndia/"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ><FacebookIcon /></a>

                        <a
                            className="btn btn-link btn-lg text-dark "
                            href="https://twitter.com/covidnewsbymib?lang=en"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferrer"
                        ><i className="fab fa-twitter"></i
                        ><TwitterIcon /></a>

                        <a
                            className="btn btn-link btn-lg text-dark "
                            href="https://www.instagram.com/coronavirusindia/?hl=en"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                            rel="noreferrer"
                        ><i className="fab fa-instagram"></i
                        ><InstagramIcon /></a>

                    </section>
                </div>

                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgb(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <span className="text-dark" > CREATED WITH LOVE BY HIMANSHU ❤</ span >
                </div>
            </footer>
        </>
    )
}


export default Footer;