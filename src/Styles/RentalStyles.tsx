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
    },
};
