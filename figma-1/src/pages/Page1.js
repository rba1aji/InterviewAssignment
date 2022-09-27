import React from "react";
import img2 from '../assets/img2.png'

export default function Page1() {
    return (
        <div>
            <table style={{ width: '100vw', height: '100vh' }}>
                <tr>
                    <td style={{ width: '67%', backgroundColor: '#FFDEAF' }}>
                    </td>
                    <div className="img1"></div>
                    <div className="img2"><img src={img2} /></div>
                    <td style={{ width: '33%', backgroundColor: '#EE3337' }}>
                    </td>
                </tr>
            </table>
        </div >
    );
}