import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        <main className="min-h-[80vh] mt-32 mx-auto max-w-6xl px-8">
            {children}
        </main>
        <Footer/>
        </>
    );
};

export default Layout;