import React, { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Section = () => {
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
            <div class="navbar bg-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div>
            </div>
            <div class="h-screen flex overflow-hidden">
                <main class="my-1 pt-2 px-10 flex-1 bg-white overflow-hidden">
                    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-3">
                        <div class="py-2">
                            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                <div class=" bg-white grid place-items-center">
                                    <img src="https://i.ibb.co/WKb9rMc/Screenshot-2022-10-26-035536.png" alt="tailwind logo" class="rounded-xl w-12" />
                                </div>
                                <div class="w-2/3 p-2">
                                    <div class="flex item-center justify-between">
                                        <p class="text-gray-700 text-md">Revenue</p>
                                    </div>
                                    <div class="flex item-center justify-between">
                                        <h1 class="text-gray-700 font-bold text-xl">$21,456</h1>
                                        <h1 class="text-green-600 font-bold text-sm px-32">+2.65%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                <div class=" bg-white grid place-items-center">
                                    <img src="https://i.ibb.co/0fqCLG8/2.png" alt="tailwind logo" class="rounded-xl w-12" />
                                </div>
                                <div class="w-2/3 p-2">
                                    <div class="flex item-center justify-between">
                                        <p class="text-gray-700 text-md">Orders</p>
                                    </div>
                                    <div class="flex item-center justify-between">
                                        <h1 class="text-gray-700 font-bold text-xl">5,643</h1>
                                        <h1 class="text-red-600 font-bold text-sm px-32">-0.82%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                                <div class=" bg-white grid place-items-center">
                                    <img src="https://i.ibb.co/LNjkTv5/3.png" alt="tailwind logo" class="rounded-xl w-12" />
                                </div>
                                <div class="w-2/3 p-2">
                                    <div class="flex item-center justify-between">
                                        <p class="text-gray-700 text-md">Customers</p>
                                    </div>
                                    <div class="flex item-center justify-between">
                                        <h1 class="text-gray-700 font-bold text-xl">45,254</h1>
                                        <h1 class="text-red-600 font-bold text-sm px-32">-1.04%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------Chart--------- */}
                    <section class="bg-white">
                        <div class=" min-h-screen">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="card-body">
                                    <div>
                                        <BarChart
                                            width={750}
                                            height={250}
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
                       
                    </section>
                    
                </main>
                <aside class="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-white rounded-r-lg">
                    <div class="">
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
                                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                                        <div class="flex flex-wrap justify-center">
                                            <div class="w-full px-4">
                                                <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                                                <a href="javascript:;" class="font-normal text-slate-700 hover:text-slate-400">Follow Account</a>
                                            </div>
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
                </aside>
            </div>
        </div>
    );
};

export default Section;