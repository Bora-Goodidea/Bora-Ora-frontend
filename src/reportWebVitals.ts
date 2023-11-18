import { ReportHandler } from 'web-vitals';
import any = jasmine.any;

const reportWebVitals = (onPerfEntry: ReportHandler | undefined): void => {
    if (onPerfEntry && onPerfEntry instanceof any) {
        void import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
