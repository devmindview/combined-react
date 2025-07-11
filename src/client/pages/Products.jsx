import React from 'react'
import hero from '../../assets/aesthetic-bg.webp'
import Card from "../components/home-ui/Card";
import productData from "../../data.js";
import SearchBar from '../components/products-ui/SearchBar.jsx';

function Products() {
    return (
        <div>
            <section
                className="h-[30vh] md:h-[35vh] container  max-w-[95%] rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem] md:rounded-tr-[8rem]  mx-auto flex items-center justify-center "
                style={{
                    backgroundImage: `
                          linear-gradient(rgba(8, 30, 15, 0.85), rgba(8, 30, 15, 0.85)),
                          url(${hero}) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <h1 className="text-3xl sm:text-7xl text-white text-center font-serif">Products</h1>
            </section>

            <section className="w-full max-w-4xl md:max-w-7xl h-auto flex flex-col items-center justify-center mx-auto my-10 px-6">

                <div className='w-full flex gap-1 md:gap-3 mb-5 md:mb-10'>
                    <select class="w-5/12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled>Select Catogary</option>
                        <option >All</option>
                        <option >Facepack</option>
                        <option >Oil</option>
                        <option >Soap</option>
                        <option >Other</option>
                    </select>
                    <SearchBar />

                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {productData.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Products