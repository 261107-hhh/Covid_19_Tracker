import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../component/statedata.css'
import Header from '../header'

import bg from '../images/background.jpg';
import Footer from "../footer";

const StateData = () => {

    const [data, setdata] = useState([]);

    fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then(res => res.json())
        .then(data => {
            const orgData = data;
            // console.log(orgData.data.regional);
            setdata(orgData.data.regional);

        })

    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }}>
                <div className=" mt-0">
                    <Header />
                    <div className="table table-responsive container-fluid ">
                        <table className="table table-hover table-striped table-fluid">
                            <thead className="table-dark">
                                <tr>
                                    <th className="headerdd">State</th>
                                    <th className="headerdd">Confirmed</th>
                                    <th className="headerdd">Recovered</th>
                                    <th className="headerdd">Deaths</th>
                                    {/* <th className="headerdd">Active</th>
                                <th className="headerdd">Update</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                {/* <th>{val[0].delta.tested}</th> */}
                                                <th>{val.loc}</th>
                                                <td>{val.confirmedCasesIndian}</td>
                                                <td>{val.discharged}</td>
                                                <td>{val.deaths}</td>
                                                {/* <td>{val.active}</td>
                                            <td>{val.lastupdatedtime}</td> */}
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default StateData;