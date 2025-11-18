import { useEffect, useState } from 'react'
import React from 'react'
import Card from '../components/Card'
import ProductList from '../components/ProductList'
import { FaArrowRightLong } from "react-icons/fa6"
import { getProductList } from '../components/api'
import Loading from '../components/Loading'
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Main = ({ addToCart, isLoggedIn }) => {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    const [allData, setAllData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    let loading = false;
    useEffect(function(){
        const p=getProductList();
        p.then(function(res){
            setAllData(res.data.products);
            console.log(res.data.products);
        })
    },[]);
    useEffect(() => {
        setCurrentPage(1);
    }, [query, sort]);
    if(!allData){
       return <div> <Loading/></div>
    }
    let data=allData.filter(function(item){
            return item.title.toLowerCase().indexOf(query.toLowerCase())!==-1;
    });
    if(sort === 'name'){
        data.sort(function(x,y){
            return x.title < y.title ? -1 : 1;
        });
    }else if(sort === 'pricelh'){
        data.sort(function(x,y){
            return x.price - y.price;
        });
    }else if(sort === 'pricehl'){
        data.sort(function(x,y){
            return y.price - x.price;
        });
    }
    console.log("data",data);
    if(data.length === 0){
        loading = true;
    }
    const totalPages = Math.ceil(data.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = data.slice(startIndex, endIndex);
    function handleChange(event){
        setQuery(event.target.value);
    }
    function handleSortChange(event){
        setSort(event.target.value);
    }
    function handlePageChange(page){
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function handlePrevPage(){
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    function handleNextPage(){
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
return (
    <div className='bg-white m-4 sm:my-12 sm:mx-32 py-12 px-8 sm:px-16'>
        <div className='flex flex-col gap-2 md:flex-row justify-between mr-2'>
           <div className='relative'>
                <input value={query} onChange={handleChange} placeholder="💡What's trending?!" className='border w-full py-1 border-gray-300 text-gray-700 pr-4 pl-2 bg-gray-100 text-sm' />
                <IoSearchSharp className='absolute top-2 right-4 text-gray-500' />
           </div>
            <select value={sort} onChange={handleSortChange} className='bg-gray-100 py-1 pl-1 pr-10 text-gray-700 text-sm border border-gray-300'>
                <option value="default">Default sorting</option>
                <option value="name">Sort by title</option>
                <option value="pricelh">Sort by price: low to high</option>
                <option value="pricehl">Sort by price: high to low </option>
            </select>
        </div>
        <main className='mt-8 min-h-[60vh]'>
            { loading ?
            (<div className='flex items-center justify-center h-full'>
            <h1 className='text-2xl text-gray-500'>No product available</h1>
        </div>):
            <ProductList products={currentProducts} />
            }
        </main>
        
        {/* Pagination */}
        {!loading && totalPages > 1 && (
            <div className='flex justify-center items-center gap-2 mt-8'>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md border ${
                        currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                    }`}
                >
                    <FaChevronLeft />
                </button>
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                        return (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-md border ${
                                    currentPage === page
                                        ? 'bg-[#FF5151] text-white border-[#FF5151]'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        );
                    } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                    ) {
                        return <span key={page} className="px-2">...</span>;
                    }
                    return null;
                })}
                
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md border ${
                        currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                    }`}
                >
                    <FaChevronRight />
                </button>
            </div>
        )}
        
    </div>
)
}

export default Main