import AdminStyles from '@Style/AdminStyles';

const { FooterContainer, FooterWrapper, FooterCopy } = AdminStyles.AdminFooterStyle;

const AdminFooter = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterCopy>© 2023 BoraOra™ . All Rights Reserved.</FooterCopy>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default AdminFooter;
