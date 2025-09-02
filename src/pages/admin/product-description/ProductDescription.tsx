
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import AdminLayout from '../AdminLayout'
import { fetchProductAdmin } from '../../../store/adminProductSlice'
import { useParams } from 'react-router-dom'

function ProductDescription() {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { product } = useAppSelector((store) => store.adminProducts)
    useEffect(() => {
        if (id) {
            dispatch(fetchProductAdmin(id))
        }
    }, [])
    console.log(product);
    return (
        <>
            <AdminLayout>
                <h1>ProductDescription</h1>
            </AdminLayout>
        </>
    )
}

export default ProductDescription
