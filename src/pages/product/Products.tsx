import { useEffect } from 'react'
import Navbar from '../../globals/components/Navbar'
import Card from './components/Card'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchProducts } from '../../store/productSlice'
import Footer from '../../globals/components/Footer'

function Products() {
    //product lyaunalai ho hai yo code .
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((store) => store.products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    {
        return (
            <>
                <Navbar />
                <div>
                    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                        {products.length > 0 && products.map((product) => {
                            return (
                                <Card product={product} />
                            )
                        })}
                    </section>

                </div>
                <Footer />
            </>
        )
    }
}

export default Products