import React from "react";
import img13 from '../assets/img13.png';
import logo4 from '../assets/logo4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';


export default function Page3() {
    return (
        <div
            style={{ width: '100vw', overflow: "hidden", background: ' #FFF4E3' }}
        >
            <table className="50vh"
            >
                <tr style={{ height: '50vh' }} className='m-0 p-0'>
                    <td><img src={img13} style={{ width: '50vw' }} /></td>
                    <td className=""
                        style={{ padding: '0 9%' }}
                    >
                        <span><img style={{ width: '17%', height: '10%' }} src={logo4} />
                            Regular Fit</span>
                        <span className="text2 "><h3 className="">Fits with your unique size</h3></span>
                        <span style={{ fontSize: '125%' }}>{'The stylish kaftan comes with a free-size loose-fitting design, thus giving you the freedom to customize the fit to suit your shape. It is your perfect fitting dress.'}
                        </span>
                    </td>
                </tr>
            </table>
            <table className="mx-auto">

                <tr className="page2row2 bold-gold" style={{ height: '50vh' }}>
                    <td><img style={{ width: '25vw' }} src={img5} />
                        <p className='text-center bg-white py-2 h5 mb-0'>V neck</p></td>
                    <td><img src={img6} style={{ width: '25vw' }} />
                        <p className='text-center bg-white py-2 h5 mb-0'>Leaf Print</p>
                </td>
                <td><img src={img7} style={{ width: '25vw' }} />
                    <p className='text-center bg-white py-2 h5 mb-0'>Half Sleeve</p>
            </td>
        </tr>
            </table >
        </div >
    );
}