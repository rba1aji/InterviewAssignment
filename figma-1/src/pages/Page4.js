import React from "react";
import logo1 from '../assets/logo1.png';
import img8 from '../assets/img8.png';

export default function Page4() {
    return (
        <div>
            <table style={{ height: '100vh', width: '100vw' }}>
                <tr>
                    <td style={{ width: '50vw', background: '#FFF4E3' }}>
                        <div className="ps-5">
                            <h4 className="bold-gold h5">CHIC, COLORFUL & COMFORTABLE</h4>
                            <p style={{ paddingRight: '48%' }}>Shararat's key goal is to ensure maximum comfort without compromising on style. We're on a mission to use best-in-class fabric and technology to offer you the widest range of sleepwear & loungewear.</p>
                        </div>
                    </td>
                    <span className="page3middle"><img alt='alt'  className='' src={logo1}/></span>
                    <td><img alt='alt' style={{ width: '50vw' }} src={img8} /></td>
                </tr>
            </table>
        </div>
    );
}