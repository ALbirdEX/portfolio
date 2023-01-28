import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./nav/skills/Skills";
import {Projects} from "./projects/Projects";
import {Remotely} from "./remotely/Remotely";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remotely/>
            <Contacts/>
            <Footer/>
        </div>
    );
}