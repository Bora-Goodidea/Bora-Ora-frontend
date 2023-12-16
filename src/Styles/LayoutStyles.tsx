import tw from 'twin.macro';

export default {
    DafalutLayoutStyle: {
        DafalutMainContainer: tw.div`min-h-screen flex flex-col`,
    },
    ModalLayout: {
        ModalChildren: {
            ModalSection: tw.div`w-full`,
            ModalTitle: tw.div`w-full text-sm pl-5`,
            ModalFlexTitle: tw.div`flex flex-col w-full pt-3`,
            ModalContentSection: tw.div`w-full pt-3`,
            ModalContent: tw.div`w-full pl-10 border-b cursor-pointer`,
            ModalItemList: tw.div`flex pl-10 py-3 border-b`,
            ModalItem: tw.p`text-xs py-3`,
        },
    },
};
