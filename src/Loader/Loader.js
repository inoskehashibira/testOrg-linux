import React from 'react';
import './Loader.scss'
import { WhisperSpinner, JellyfishSpinner, PongSpinner, MagicSpinner, RotateSpinner, WaveSpinner, SequenceSpinner, PulseSpinner,SwishSpinner,HoopSpinner } from "react-spinners-kit";
const Loader = () => {
    return (
        <div className='container m-auto flex flex-col items-center justify-center'>
            <PulseSpinner className='m-auto' color="#2957B2" />
        </div>
        
    );
}

export default Loader;


{/* <div className='container m-auto'>
            <div class="loader">
                <div class="outer"></div>
                <div class="middle"></div>
                <div class="inner"></div>
            </div>
        </div> */}