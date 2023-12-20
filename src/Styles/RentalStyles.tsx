import tw from 'twin.macro';

export default {
    RentalLayoutStyle: {
        RentalSection: tw.div`flex w-full flex-col space-y-2 cursor-pointer`,
        RentalFigure: tw.div`relative transition-all duration-300 cursor-pointer z-10`,
        RentalImg: tw.img`w-24 rounded-lg`,
        RentalFigcaption: tw.figcaption`flex absolute bottom-1 right-1`,
        RentalContainer: tw.div`flex flex-nowrap w-full justify-center gap-1`,
        CheckTimeBlue: tw.div`border border-blue-400 w-1/2`,
        CheckTimeGray: tw.div`border border-gray-200 w-1/2`,
        RentalTimeSection: tw.div`flex flex-nowrap w-full pt-1`,
        RentalPt3: tw.div`flex w-full pt-3`,
        RentalBorder: tw.div`flex w-full border-b`,
        RentalSpinner: tw.div`flex w-full flex-col space-y-2 py-4 items-center justify-center`,
        RentalMoreSection: tw.div`flex w-full flex-col space-y-2 py-4`,
        RentalModalSection: tw.div`flex pl-5 py-3 border-b justify-between`,
        RentalModalDiv: tw.div`flex pl-5 py-3 border-b`,
        RentalImgSection: tw.div`flex flex-col w-full pt-3 overflow-auto h-80`,
        RentalImgContainer: tw.div`flex flex-col w-full gap-1 divide-y scroll-m-0`,
        RentalImgWrapper: tw.figure`relative transition-all duration-300 cursor-pointer`,
        RentalModalContainer: tw.div`flex flex-col w-2/6`,
        RentalBtnGray: tw.div`flex pl-5 py-3 bg-gray-100 cursor-pointer`,
        RentalBtnWhite: tw.div`flex pl-5 py-3 bg-white cursor-pointer`,
        EditSection: tw.div`flex w-4/6`,
        EditContainer: tw.div`flex flex-col w-full px-2 space-y-1`,
        EditWrapper: tw.div`flex flex-nowrap border-b items-center py-3`,
        EditList: tw.div`flex pr-2`,
        ItemIcon: tw.svg`w-4 h-4 cursor-pointer`,
        ItemCount: tw.span`text-xs text-red-600 pl-2`,
        BoxItem: tw.div`grid grid-cols-4 w-full gap-1`,
        CheckContainer: tw.div`flex flex-col w-full gap-1`,
    },
};
