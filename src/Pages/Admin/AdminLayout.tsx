import AdminStyles from '@Style/AdminStyles';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';
import { JsxElement } from 'typescript';

type ContentElement = JsxElement | any; // element child

const { AdminLayoutContainer } = AdminStyles.AdminLayoutStyle;
const { ContentContainer, MainContainer } = AdminStyles.ContentWrapperStyle;

const AdminLayout = ({ children }: ContentElement) => {
    return (
        <AdminLayoutContainer>
            <AdminHeader />
            <ContentContainer>
                <MainContainer>{children}</MainContainer>
                <AdminNav />
            </ContentContainer>
            <AdminFooter />
        </AdminLayoutContainer>
    );
};

export default AdminLayout;
