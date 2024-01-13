import AdminStyles from '@Style/AdminStyles';
import { AdminHeader, AdminFooter, AdminNav } from '@Elements';
import { Outlet } from 'react-router';

const { AdminLayoutContainer } = AdminStyles.AdminLayoutStyle;
const { ContentContainer, MainContainer } = AdminStyles.ContentWrapperStyle;

const AdminLayout = () => {
    return (
        <AdminLayoutContainer>
            <AdminHeader />
            <ContentContainer>
                <MainContainer>
                    <Outlet />
                </MainContainer>
                <AdminNav />
            </ContentContainer>
            <AdminFooter />
        </AdminLayoutContainer>
    );
};

export default AdminLayout;
