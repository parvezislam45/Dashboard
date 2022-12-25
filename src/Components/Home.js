import React from 'react';

const Home = () => {
    return (
        <div>
            <body class="flex bg-gray-100 min-h-screen">
                
                <div class="flex-grow text-gray-800">
                    <main class="p-6 sm:p-10 space-y-6">
                        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                            <div class="flex items-center p-8 bg-white shadow rounded-lg">
                                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-2xl font-bold">62</span>
                                    <span class="block text-gray-500">Students</span>
                                </div>
                            </div>
                            <div class="flex items-center p-8 bg-white shadow rounded-lg">
                                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="block text-2xl font-bold">6.8</span>
                                    <span class="block text-gray-500">Average mark</span>
                                </div>
                            </div>
                            <div class="flex items-center p-8 bg-white shadow rounded-lg">
                                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="inline-block text-2xl font-bold">9</span>
                                    <span class="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
                                    <span class="block text-gray-500">Underperforming students</span>
                                </div>
                            </div>
                            <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
                                <div class="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                                <div class="p-4 flex-grow">
                                    <div class="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                                </div>
                            </div>
                        </section>
                        <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                            <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                                <div class="px-6 py-5 font-semibold border-b border-gray-100">The number of applied and left students per month</div>
                                <div class="p-4 flex-grow">
                                    <div class="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                                </div>
                            </div>                       
                            <div class="flex flex-col row-span-3 bg-white shadow rounded-lg">
                                <div class="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
                                <div class="p-4 flex-grow">
                                    <div class="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                                </div>
                            </div>
                        </section>
                        {/* <section class="text-right font-semibold text-gray-500">
                            <a href="#" class="text-purple-600 hover:underline">Recreated on Codepen</a> with <a href="https://tailwindcss.com/" class="text-teal-400 hover:underline">Tailwind CSS</a> by Azri Kahar, <a href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard" class="text-purple-600 hover:underline">original design</a> made by Chili Labs
                        </section> */}
                    </main>
                </div>
            </body>
        </div>
    );
};

export default Home;