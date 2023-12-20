import AdminStyles from '@Style/AdminStyles';
import React from 'react';

const { Container, Wrapper, TitleWrapper, Title, ButtonWrapper, ButtonListWrapper, ButtonItemWrapper, ButtonContent } =
    AdminStyles.AdminHeaderStyle;

const AdminHeader = () => {
    return (
        <Container>
            <Wrapper>
                <TitleWrapper>
                    <Title>보라오라 관리</Title>
                </TitleWrapper>
                <ButtonWrapper>
                    <ButtonListWrapper>
                        <ButtonItemWrapper>
                            <ButtonContent>로그아웃</ButtonContent>
                        </ButtonItemWrapper>
                    </ButtonListWrapper>
                </ButtonWrapper>
            </Wrapper>
        </Container>
    );
};

export default AdminHeader;
