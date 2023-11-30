import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ColorType } from '@Type/StylesInterface';

export default {
    OraModalStyle: {
        ModalWapper: tw.div`relative z-10`,
        BackGroundBlur: tw.div`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`,
        FixedWapper: tw.div`fixed inset-0 z-10 w-screen overflow-y-auto`,
        FlexWapper: tw.div`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`,
        RelativeWapper: tw.div`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`,
        ContentWapper: tw.div`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4`,
        Contents: tw.div`sm:flex sm:items-start`,
        ButtonWapper: tw.div`bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`,
    },
    OramButtonStyle: {
        DefaultButton: styled.button(({ Color }: { Color?: ColorType }) => {
            const returnTw = [
                tw`mt-3 inline-flex w-full justify-center rounded-md px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0`,
            ];

            if (Color === 'red') {
                returnTw.push(tw`bg-red-600 text-white`);
            } else if (Color === 'blue') {
                returnTw.push(tw`bg-blue-600 text-white`);
            } else if (Color === 'gray') {
                returnTw.push(tw`bg-gray-300 text-gray-500`);
            } else {
                returnTw.push(tw`bg-white text-black`);
            }

            return returnTw;
        }),
    },
};
