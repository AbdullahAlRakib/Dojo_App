import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import MiddleContent from "../Components/MiddleContent";
import MainButton from "../Components/MainButton";
import HomeCardPage from "../Components/HomeCardPage";
import Footer from "../Components/Footer";

const HomePage = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Main/>
        <MiddleContent/>
        <MainButton/>
        <HomeCardPage/>
        <Footer/>

        </>
     );
}
 
export default HomePage;