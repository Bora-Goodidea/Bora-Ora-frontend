import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';

const AdminLayoutPage = () => {
    return (
        <div className="min-h-screen h-screen flex flex-col dark:bg-gray-700">
            <AdminHeader />

            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700">
                    {/* Contents Section */}
                    Contents Section
                    {/* Contents Section */}
                </main>

                <AdminNav />
            </div>

            <AdminFooter />
        </div>
    );
};

export default AdminLayoutPage;
