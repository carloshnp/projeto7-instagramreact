function Usuario(props) {
    return (
        <div class="account">
            <a href=""><img src="img/catanacomics 1.png" /></a>
            <div class="account-user">
                <a href=""><p><strong>catanacomics</strong></p></a>
                <p class="alt-text">Catana</p>
            </div>
        </div>
    )
}

function Sugestoes() {

    const sugestoes = [{user:'bad.vibes.memes', profileImg:'./img/badvibesmemes 1.png'}, {user:'chibirdart', profileImg:'./img/chibirdart 1.png'}, {user:'razoesparaacreditar', profileImg:'./img/razoesparaacreditar 1.png'}, {user:'adorable_animals', profileImg:'./img/adorableanimals 1.png'}, {user:'smallcutecats', profileImg:'./img/smallcutecats 1.png'}];

    return (
        <div class="suggestions">
            <div class="suggestions-header">
                <p class="alt-text">Sugestões para você</p>
                <a href=""><p>Ver tudo</p></a>
            </div>
            {sugestoes.map(Sugestao)}
            <div class="copyright">
                <a href="">Sobre</a> • <a href="">Ajuda</a> • <a href="">Imprensa</a> • <a href="">API</a> • <a href="">Carreiras</a> • <a href="">Privacidade</a> • <a href="">Termos</a> • <a href="">Localizações</a> • <a href="">Contas mais relevantes</a> • <a href="">Hashtags</a> • <a href="">Idioma</a>
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="suggestion-accounts">
            <div class="suggestion-account-user">
                <a href=""><img src={props.profileImg} /></a>
                <div class="suggestion-account-username">
                    <a href=""><p>{props.user}</p></a>
                    <p class="suggestion-account-user-alt-text">Segue você</p>
                </div>
            </div>
            <div class="suggestion-account-user-follow">
                <a href="">Seguir</a>
            </div>
        </div>
    )
}

export default function SideBar() {

    return (
        <div class="sidebar">
            <div class="sidebar-content">
                <Usuario/>
                <Sugestoes/>
            </div>
        </div>
    );
}