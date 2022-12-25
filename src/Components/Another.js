import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import Download from './Download';

const Another = () => {
    const data = [
        {
            name: 'Feb',
            uv: 30,
            pv: 20,
            amt: 3000,
        },
        {
            name: 'Mar',
            uv: 40,
            pv: 23,
            amt: 2210,
        },
        {
            name: 'Apr',
            uv: 20,
            pv: 16,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 10,
            pv: 27,
            amt: 2000,
        },
        {
            name: 'Jun',

            pv: 25,
            amt: 2181,
        },
        {
            name: 'July',

            pv: 30,
            amt: 2500,
        },
        {
            name: 'Aug',

            pv: 25,
            amt: 2100,
            amount: "K",

        },
        {
            name: 'Sept',

            pv: 35,
            amt: 2100,
        },
        {
            name: 'Oct',

            pv: 30,
            amt: 2100,
        },
    ];

    return (
        <div>
            <header class="flex flex-wrap">
                <nav class="flex w-screen justify-between bg-gray-50 text-gray-600">
                    <div class="w-full xl:px-12 py-6 px-5 flex space-x-12 items-center ">
                        <a class="text-2xl font-bold" href="#">
                            Your Logo
                        </a>
                        <ul class="hidden md:flex mx-auto px-5 font-semibold space-x-12">
                            <li><a class="hover:text-gray-900" href="#">Home</a></li>
                            <li><a class="hover:text-gray-900" href="#">Products</a></li>
                            <li><a class="hover:text-gray-900" href="#">Contact Us</a></li>
                        </ul>
                        <div class="flex-grow border-2 py-1 px-3 lg:flex justify-between round hidden">
                            <input class="flex-grow text-gray-600 focus:outline-none" type="text" placeholder="Search Product ..." />
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                        <div class="hidden xl:flex items-center text-gray-600 space-x-5 items-center">
                            <a class="hover:text-gray-900" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a class="flex items-center hover:text-gray-900" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span class="absolute flex ml-4 -mt-5">
                                    <span class="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
                                    <span class="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a class="flex xl:hidden items-center mr-6 hover:text-gray-900" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="flex absolute -mt-5 ml-4">
                            <span class="h-3 w-3 absolute bg-pink-500 opacity-75 inline-flex rounded-full animate-ping"></span>
                            <span class="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
                        </span>
                    </a>
                    <a class="xl:hidden self-center mr-12 hover:text-gray-900" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>
            </header>
            <div class="h-screen grid grid-cols-3">
                <div class="lg:col-span-2 col-span-3 bg-white space-y-8 px-12">
                    <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center">
                        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-3 -mt-14">
                            <div class="">
                                <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div class=" bg-white grid place-items-center">
                                        <img src="https://i.ibb.co/WKb9rMc/Screenshot-2022-10-26-035536.png" alt="tailwind logo" class="rounded-xl w-10" />
                                    </div>
                                    <div class="w-2/3 p-2">
                                        <div class="flex item-center justify-between">
                                            <p class="text-gray-700 text-md">Revenue</p>
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-md">$21,456</h1>
                                            <h1 class="text-green-600 font-bold text-sm">+2.65%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div class=" bg-white grid place-items-center">
                                        <img src="https://i.ibb.co/0fqCLG8/2.png" alt="tailwind logo" class="rounded-xl w-10" />
                                    </div>
                                    <div class="w-2/3 p-2">
                                        <div class="flex item-center justify-between">
                                            <p class="text-gray-700 text-md">Orders</p>
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-md">5,643</h1>
                                            <h1 class="text-red-600 font-bold text-sm">-0.82%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2">
                                <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div class=" bg-white grid place-items-center">
                                        <img src="https://i.ibb.co/LNjkTv5/3.png" alt="tailwind logo" class="rounded-xl w-10" />
                                    </div>
                                    <div class="w-2/3 p-2">
                                        <div class="flex item-center justify-between">
                                            <p class="text-gray-700 text-md">Customers</p>
                                        </div>
                                        <div class="flex item-center justify-between">
                                            <h1 class="text-gray-700 font-bold text-xl">45,254</h1>
                                            <h1 class="text-red-600 font-bold text-sm">-1.04%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div class="...">
                                <h1 class="text-gray-700 font-bold text-md">Overview</h1>
                                <div class="card w-96 bg-white">
                                    <div class="card-body">
                                        <h1 class="text-gray-700 font-bold text-md">This Month</h1>
                                        <div class="flex item-center gap-3">
                                            <h1 class="text-gray-700 font-bold text-2xl">$21,456</h1>
                                            <h1 class="text-green-600 font-bold text-md">+2.65%</h1>
                                        </div>
                                        <div className='grid grid-cols-2 gap-10'>
                                            <div>
                                                <div class=" text-black text-sm">Orders</div>
                                                <div class="stat-value text-black text-base">5,643</div>
                                            </div>
                                            <div>
                                                <div class=" text-black text-sm">Sales</div>
                                                <div class="stat-value text-black text-sm">16,273</div>
                                            </div>
                                            <div>
                                                <div class=" text-black text-sm">Order Value</div>
                                                <div class="stat-value text-black text-sm">12.03%</div>
                                            </div>
                                            <div>
                                                <div class=" text-black text-sm">customers</div>
                                                <div class="stat-value text-black text-sm">21,456</div>
                                            </div>
                                            <div>
                                                <div class=" text-black text-sm">Income</div>
                                                <div class="stat-value text-black text-sm">$35,652</div>
                                            </div>
                                            <div>
                                                <div class=" text-black text-sm">Expense</div>
                                                <div class="stat-value text-black text-sm">$12,268</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 ...">
                                <div class="">
                                    <div class="pl-28">
                                        <div className='text-end'>
                                            <h1 class="text-gray-700 font-bold text-md text-end">Short by: <span className="text-xs font-light">yearly</span></h1>
                                            <BarChart className='mt-10'
                                                width={600}
                                                height={300}
                                                data={data}
                                                margin={{
                                                    top: 5,
                                                    right: 30,
                                                    left: 50,
                                                    bottom: 5
                                                }}
                                                barSize={30}
                                            >
                                                <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
                                                <YAxis dataKey="uv" unit="k" padding={{ left: 10, right: 10 }} />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="pv" fill="#8884d8" />
                                            </BarChart>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-span-1 bg-white grid-cols-1">
                    <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-28 max-w-sm mx-auto">
                        <div class="relative max-w-md mx-auto md:max-w-2xl mt-16 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
                            <div class="px-6">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full flex justify-center">
                                        <div class="relative">
                                            <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[100px]" alt='avatar' />
                                        </div>
                                    </div>
                                    <div class="w-full text-center mt-20">
                                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                                                <span class="text-sm text-slate-400">Photos</span>
                                            </div>
                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                                                <span class="text-sm text-slate-400">Followers</span>
                                            </div>

                                            <div class="p-3 text-center">
                                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                                                <span class="text-sm text-slate-400">Following</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-2">
                                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike Thompson</h3>
                                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
                                    </div>
                                </div>
                                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full px-4">
                                            <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                                            <a href="javascript:;" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


                <Download></Download>
            </div>
        </div>
    );
};

export default Another;