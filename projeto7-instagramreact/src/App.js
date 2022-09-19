import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function App() {
    return (
        <>
            <NavBar/>
            <Corpo/>
        </>
    );
}

function Corpo() {
    return (
        <div class="main">
            <div class="content">
                <Stories/>
                <Posts/>
            </div>
        </div>
    );
}