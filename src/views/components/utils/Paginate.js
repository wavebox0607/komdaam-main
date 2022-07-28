
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Pagination({ setPage, paginate }) {
    return (
        <div className=" px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <p
                    onClick={() => paginate?.prev_page_url ? setPage(paginate?.prev_page_url) : null}
                    className={`${paginate?.prev_page_url ? "cursor-pointer bg-white text-gray-700  hover:bg-gray-50" : "cursor-not-allowed opacity-50 "} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md `}
                >
                    Previous
                </p>
                <p
                    onClick={() => paginate?.next_page_url ? setPage(paginate?.next_page_url) : null}

                    className={`${paginate?.next_page_url ? "cursor-pointer" : "cursor-not-allowed opacity-50"} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
                >
                    Next
                </p>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">

                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

                        {
                            paginate?.links?.map((item, id) =>
                                <p
                                    key={id}
                                    onClick={() => item?.url ? setPage(item?.url) : null}
                                    aria-current="page"
                                    className={`${item?.active ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"} ${item?.url ? "cursor-pointer" : "cursor-not-allowed opacity-50"}  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                                >
                                    {item.label.includes('Previous') ? <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> : item.label.includes('Next') ? <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> : item?.label}
                                </p>

                            )
                        }

                    </nav>
                </div>
            </div>
        </div>
    )
}
