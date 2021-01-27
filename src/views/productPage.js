import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ProductPage() {
    const url = 'https://api.imgflip.com/get_memes'
    // const [product, setproduct] = useState(null)
    let content = null


    // useEffect(() => {
    //     axios.get(url)
    //         .then(Response => {
    //             setproduct(Response.data)
    //         })
    // }, [url])

    // if (product) { 

        return (
            <div>

                <h2 className='text-2xl font-bold text-center'>campaign page</h2>
                {/* <p>{product.name}</p> */}
            </div>
        )
    // }

    // return (
    //     <div>
    //         <h2 className='text-2xl font-bold text-center'>home page</h2>
    //         <h1>
    //             {content}
    //         </h1>
    //     </div>
    // )
}

export default ProductPage