export default function App() {
    return (
        <>
            <NavBar />
            <div class="main">
                <div class="content">
                    <Stories />
                    <Posts />
                    <BottomBar />
                </div>
                <div class="sidebar">
                    <SideBar />
                </div>
            </div>
        </>
    );
}