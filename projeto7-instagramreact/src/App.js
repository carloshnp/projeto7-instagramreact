import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";
import BottomBar from "./BottomBar";
import SideBar from "./SideBar";

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
                <BottomBar/>
            </div>
            <SideBar/>
        </div>
    );
}