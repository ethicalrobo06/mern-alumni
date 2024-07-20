import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import adobe from '../assets/company/adobe.jpg';
import amazon from '../assets/company/amazon.jpg';
import aws from '../assets/company/aws.jpg';
import ameyo from '../assets/company/ameyo.jpg';
import apply from '../assets/company/applyboard.jpg';
import blume from '../assets/company/blume.jpg';
import bny from '../assets/company/bny.jpg';
import cadence from '../assets/company/cadence.jpg';
import capgemini from '../assets/company/capgemini.jpg';
import cisco from '../assets/company/cisco.jpg';
import coca from '../assets/company/coca.jpg';
import code from '../assets/company/code.jpg';
import commvault from '../assets/company/commvault.jpg'
import cvent from '../assets/company/cvent.jpg'
import datazymes from '../assets/company/datazymes.jpg'
import deshaw from '../assets/company/deshawco.jpg'
import delhivery from '../assets/company/delhivery.jpg'
import dell from '../assets/company/dell.jpg'
import fico from '../assets/company/fico.jpg'
import fleetx from '../assets/company/fleetx.jpg'
import frugal from '../assets/company/frugal.jpg'
import golden from '../assets/company/golden.jpg'
import google from '../assets/company/google.jpg'
import hanu from '../assets/company/hanu.jpg'
import hashedin from '../assets/company/hashedin.jpg'
import hcl from '../assets/company/hcl.jpg'
import hexaview from '../assets/company/hexaview.jpg'
import hitachi from '../assets/company/hitachi.jpg'
import honeywell from '../assets/company/honeywell.jpg'
import hewlett from '../assets/company/hewlett.jpg'
import hsbsc from '../assets/company/hsbc.jpg'
import infosys from '../assets/company/infosys.jpg'
import innovaccer from '../assets/company/innovaccer.jpg'
import jkt from '../assets/company/jkt.jpg'
import jtg from '../assets/company/jtg.jpg'
import juspay from '../assets/company/juspay.jpg'
import justdial from '../assets/company/justdial.jpg'
import kpit from '../assets/company/kpit.jpg'
import lt from '../assets/company/lt.jpg'
import microsoft from '../assets/company/microsoft.jpg'
import nagarro from '../assets/company/nagarro.jpg'
import nttdata from '../assets/company/nttdata.jpg'
import paypal from '../assets/company/paypal.jpg'
import pratilipi from '../assets/company/pratilipi.jpg'
import servicenow from '../assets/company/servicenow.jpg'
import sifive from '../assets/company/sifive.jpg'
import tas from '../assets/company/tas.jpg'
import tcs from '../assets/company/tcs.jpg'
import mahindra from '../assets/company/mahindra.jpg'
import tek from '../assets/company/tek.jpg'
import watchguard from '../assets/company/watchguard.jpg'
import wipro from '../assets/company/wipro.jpg'
import zs from '../assets/company/zs.jpg'

const images = [
    adobe,
    amazon,
    aws,
    ameyo,
    apply,
    blume,
    bny,
    cadence,
    capgemini,
    cisco,
    coca,
    code,
    commvault,
    cvent,
    datazymes,
    deshaw,
    delhivery,
    dell,
    fico,
    fleetx,
    frugal,
    golden,
    google,
    hanu,
    hashedin,
    hcl,
    hexaview,
    hitachi,
    honeywell,
    hewlett,
    hsbsc,
    infosys,
    innovaccer,
    jkt,
    jtg,
    juspay,
    justdial,
    kpit,
    lt,
    microsoft,
    nagarro,
    nttdata,
    paypal,
    pratilipi,
    servicenow,
    sifive,
    tas,
    tcs,
    mahindra,
    tek,
    watchguard,
    wipro,
    zs
];



const groupedImages = images.reduce((groups, image, index) => {
    if (index % 2 === 0) {
        groups.push([image]);
    } else {
        groups[groups.length - 1].push(image);
    }
    return groups;
}, []);

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="absolute mb-4 ml-[-28px] top-[5.6rem] -translate-y-1/2 left-0 z-10" onClick={onClick}>
            <IoIosArrowDropleft className="transform scale-[2]  text-slate-600" />
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="absolute  top-[5.6rem] mr-[-20px] -translate-y-1/2 right-0 z-10" onClick={onClick}>
            <IoIosArrowDropright className="transform scale-[2] text-slate-600 " />
        </button>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const Recruiter = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Slider
            className='w-[1080px] h-[192.21px] mx-auto'
            {...settings} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
            {groupedImages.map((pair, index) => (
                <div key={index} className="flex items-center justify-center ">
                    {pair.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt="" className="w-[174px] h-[86.1125px] object-fill  mt-[2px]  border-2 border-orange-300" />
                    ))}
                </div>
            ))}
        </Slider>
    );
};

export default Recruiter;