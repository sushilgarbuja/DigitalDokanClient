import { useEffect } from 'react'
import AdminLayout from '../AdminLayout'
import UserTable from './components/UserTable'
import { fetchUsers } from '../../../store/adminUserSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

//aba api call garne ho uta admin user slice ma cha banako code
function Users() {
    const dispatch = useAppDispatch()
    const { users } = useAppSelector((store) => store.users)
    console.log(users);
    useEffect(() => {
        dispatch(fetchUsers())

    }, [])
    return (
        <AdminLayout>
            <UserTable users={users} />
        </AdminLayout>
    )
}

export default Users
