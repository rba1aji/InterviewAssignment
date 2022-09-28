import React from "react";
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.png';
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'


export default function Page2() {
    return (
        <div>
            <table className="pagetabl"
                style={{ width: '100vw', height: '100vh', overflow: "hidden", background: ' #FFF4E3' }}>
                <tr style={{ height: '50vh' }} className='m-0 p-0'>
                    <td><img alt='alt' src={img3} style={{ width: '50vw' }} /></td>
                    <td className=""
                        style={{ padding: '0 9%' }}
                    >
                        <span><img alt='alt' style={{ width: '17%', height: '10%' }} src={logo2} /> 100% Cotton</span>
                        <span className="text2 "><h3 className="">Feel cozy and comfortable</h3></span>
                        <span style={{ fontSize: '125%' }}>{'Classy and stylish, this kaftan is made of cotton, which keeps you cozy and comfortable. It is gentle on your skin and gives you comfort with high breathability.'}
                        </span>
                    </td>
                </tr>
                <tr>
                <td className=""
                        style={{ padding: '0 9%' }}
                    >
                        <span><img alt='alt' style={{ width: '17%', height: '10%' }} src={logo3} /> Woven Fabric</span>
                        <span className="text2 "><h3 className="">Set the style in class</h3></span>
                        <span style={{ fontSize: '125%' }}>{'This cotton kaftan is soft and feels great against your skin. And it is comfortably lightweight to complement warm weather outdoors or a day of lazy lounging indoors.'}
                        </span>
                    </td>
                    <td><img alt='alt' src={img4} style={{ width: '50vw', height: '50vh' }} /></td>
                </tr>
            </table >
        </div>
    );
}