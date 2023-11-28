import React from 'react';
import { RecoilRoot } from 'recoil';
import RootRoutes from '@Module/RootRoutes';

const App = () => {
    return (
        <RecoilRoot>
            {(() => {
                return <RootRoutes />;
            })()}
        </RecoilRoot>
    );
};

export default App;
