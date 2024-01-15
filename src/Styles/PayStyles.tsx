import tw from 'twin.macro';

export default {
    PayLayoutStyle: {
        PayMainSection: tw.main`flex-1 w-full bg-gray-50 pb-10`,
        PayFigure: tw.figure`relative transition-all duration-300`,
        PayFigcaption: tw.figcaption`flex absolute bottom-1 left-5 items-center justify-center`,
        PaySection: tw.div`flex flex-col w-full gap-3`,
        PayContainer: tw.div`flex flex-col w-full bg-white p-5`,
        PayWrapper: tw.div`flex w-full justify-between`,
        GrayBar: tw.div`flex w-full border-2 border-gray-50`,
        PayRadioBtn: tw.input`w-4 h-4 bg-gray-100 focus:ring-blue-500`,
        PayLabel: tw.label`ms-2 text-sm font-medium text-gray-900 items-center flex gap-2`,
        PayH4: tw.img`h-4`,
        PayExplainSection: tw.div`flex flex-col w-full border-b border-gray-200 py-5`,
        PayExplainContainer: tw.div`flex flex-nowrap w-full justify-between cursor-pointer`,
        PayExplainWrapper: tw.span`w-full text-xs text-gray-500 font-sans text-left whitespace-pre-line`,
        PayXsText: tw.div`mb-2 text-xs font-semibold`,
        PayRuleList: tw.ul`space-y-1 text-xs text-gray-500 list-disc list-inside`,
        PayBottomSection: tw.div`flex flex-col w-full border-gray-200 py-5`,
    },
};
