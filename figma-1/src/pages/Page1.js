import React from "react";
import img2 from '../assets/img2.png'
import logo1 from '../assets/logo1.png'

export default function Page1() {
    return (
        <div>
            <table style={{ width: '100vw', height: '100vh' }}>
                <tr>
                    <td style={{ width: '67%' }} className='bg-1'>
                    </td>
                    <div className="text1" style={{padding:'0%'}}>
                        <div><span className="bg-white py-3 px-4"  >
                            <img alt='alt' style={{ width: '40%' }} src={logo1} />
                        </span></div>
                        <div className='text11 mt-4'>YELLOW LEAF PRINT<br />COTTON KAFTAN</div>
                    </div>
                    <div className="img1"></div>
                    <div className="img2"><img alt='alt' src={img2} /></div>
                    <td style={{ width: '33%', backgroundColor: '#EE3337' }}>
                    </td>
                </tr>
            </table>
        </div >
    );
}