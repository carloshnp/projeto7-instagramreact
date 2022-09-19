export default function App() {
    return (
        <>
            <div class="topbar">
                <div class="topbar-content">
                    <div class="logo">
                        <a href="http://localhost:3000/projeto7-instagramreact"><ion-icon name="logo-instagram"></ion-icon></a>
                        <div class="vbar topbar-toggle"></div>
                        <a href="http://localhost:3000/projeto7-instagramreact"><img src="./img/logo.png" height="29px" /></a>
                        <a href="http://localhost:3000/projeto7-instagramreact" class="logo-toggle"><ion-icon name="paper-plane-outline"></ion-icon></a>
                    </div>
                    <div class="search topbar-toggle">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div class="icon-menu topbar-toggle">
                        <a href="http://localhost:3000/projeto7-instagramreact"><ion-icon name="paper-plane-outline"></ion-icon></a>
                        <a href="http://localhost:3000/projeto7-instagramreact"><ion-icon name="compass-outline"></ion-icon></a>
                        <a href="http://localhost:3000/projeto7-instagramreact"><ion-icon name="heart-outline"></ion-icon></a>
                        <a href="http://localhost:3000/projeto7-instagramreact"><ion-icon name="person-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </>
    );
}