import React from "react";
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img14 from '../assets/img14.png'

export default function Page5() {
    return (
        <div><table style={{
            background: 'linear-gradient(135deg, #FFDEAF 0%, #FBB148 100%)',
            width: '100vw', height: '85vh'
        }}>
            <tr>
                <td >
                    <img style={{ width: '40vw' }} src={img9} />
                </td>
                <td stye={{ width: '60vw' }}>
                    <table className="page5table">
                        <tr className="text-center">
                            <td><img src={img10} />
                                <p><b>Fabric</b><br />Cotton</p>
                            </td>
                            <td><img src={img14} />
                                <p><b>Fabric</b><br />Cotton</p>
                            </td>

                        </tr>
                        <tr className="text-center">
                            <td><img src={img11} />
                                <p><b>Fabric</b><br />Cotton</p>
                            </td>
                            <td><img src={img12} />
                                <p><b>Fabric</b><br />Cotton</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
            <div className="text-center py-3">
                <h5 className="bold-gold mb-1">Wash Care</h5>
                <p style={{ fontSize: '120%' }} className='px-5'> Can be hand washed or normal machine washed with cold water. Please dry the kaftan in a light shade away
                    from direct sunlight.</p>
            </div>
        </div>
    );
}