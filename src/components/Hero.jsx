import React from 'react';
import { GoPlus } from 'react-icons/go';

const Hero = () => {
    return (



        <div className='bg-base-200 py-20'>
            <div className=" container mx-auto text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] text-white"> <GoPlus /> Add a Friend</button>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-4 gap-6 mt-10'>
                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10</h2>
                        <p>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">5</h2>
                        <p>On Track</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10</h2>
                        <p>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-white shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">10</h2>
                        <p>Interactions This Month</p>
                    </div>
                </div>
            </div>


            <div className="flex container mx-auto flex-col pt-10">
                <div className="divider text-black"></div>
            </div>

        </div>


    );
};

export default Hero;