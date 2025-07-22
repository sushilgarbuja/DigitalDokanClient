import Sidebar from "./components/sidebar/Sidebar"






function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                {/* Main content */}
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">


                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>

        </>
    )

}

export default AdminLayout