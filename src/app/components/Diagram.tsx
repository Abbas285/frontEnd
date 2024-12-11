import React from 'react'

const Diagram = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

            <div className="w-full max-w-4xl flex justify-between items-center bg-white shadow-sm rounded-md px-4 py-2 mb-6">
                <h2 className="text-lg font-medium text-gray-800">Generation 1</h2>
                <div className="relative">

                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <span className="mr-2">More Options</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 5.25a.75.75 0 100-1.5.75.75 0 000 1.5zm0 5.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            />
                        </svg>
                    </button>

                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Generate Images</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Generate Screens Flow</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Source Code</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export as...</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete forever</a>
                    </div>
                </div>
            </div>


            <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm">
                <div className="h-[calc(100vh-200px)] bg-gray-200 rounded-lg"></div>
            </div>

            <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
                + New Section
            </button>
        </div>

    )
}

export default Diagram