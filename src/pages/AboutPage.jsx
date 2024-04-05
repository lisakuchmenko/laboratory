import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageBlur } from "../components/PageBlur";


export default function AboutPage() {


    return (
        <div className='bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth'>
            <Header />
            <PageBlur>

                <Footer/>
            </PageBlur>
        </div>
    )
};
