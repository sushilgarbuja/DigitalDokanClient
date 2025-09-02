


import { useEffect } from 'react'
import AdminLayout from '../AdminLayout'
import ProductTable from './components/ProductTable'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

import { AdminfetchProducts } from '../../../store/adminProductSlice'

function AdminProducts() {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((store) => store.adminProducts)
    console.log(products);
    useEffect(() => {
        dispatch(AdminfetchProducts())
    }, [])
    return (
        <AdminLayout>
            <ProductTable products={products} />
        </AdminLayout>
    )
}

export default AdminProducts
