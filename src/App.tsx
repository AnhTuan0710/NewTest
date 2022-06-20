import './App.css';
import Slider from './View/Home/HeaderFooter/Slider';
import Header from './View/Home/HeaderFooter/Header';
import Footer from './View/Home/HeaderFooter/Footer';
import { BoxBody, BoxContent, BoxRouter, BoxSlider } from './Style/App';
import Router from './Router/Router';

function App() {
    return (
        <div>
            <BoxBody >
                <BoxSlider>
                    <Slider />
                </BoxSlider>
                <BoxContent>
                    <Header />
                    <BoxRouter>
                        <Router/>
                    </BoxRouter>
                    <Footer />
                </BoxContent>
            </BoxBody>
        </div>
    );
}

export default App;
