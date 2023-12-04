import Header from './Header';
import Footer from './Footer';

const DefaultLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        Contents Section
                        {/* Contents End */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DefaultLayout;
