function Post(props) {
    return (
        <div class="post">
            <div class="post-topbar">
                <div class="post-topbar-user">
                    <a href=""><img src={props.profileImg} /></a>
                    <a href=""><p>{props.user}</p></a>
                </div>
                <a href=""><ion-icon name="ellipsis-horizontal-outline"></ion-icon></a>
            </div>
            <div class="post-img"><img src={props.postImg} /></div>
            <div class="reaction-bar">
                <div class="interactions">
                    <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                    <a href=""><ion-icon name="chatbubble-outline"></ion-icon></a>
                    <a href=""><ion-icon name="paper-plane-outline"></ion-icon></a>
                </div>
                <div class="save">
                    <a href=""><ion-icon name="bookmark-outline"></ion-icon></a>
                </div>
            </div>
            <div class="comments-bar">
                <div class="comments-info">
                    <img src={props.commentsImg} /><p>Curtido por <strong>{props.commentsUser}</strong> e  <strong>outras 101.253 pessoas</strong></p>
                </div>
                <div class="comments">
                    <div class="comment">
                        <p><user>{props.commentsUser}</user> Que lindo!</p>
                        <a href=""><ion-icon class="comment-icon" name="heart-outline"></ion-icon></a>
                    </div>
                    <like></like>
                </div>
                <div class="comments-box">
                    <a href=""><ion-icon name="happy-outline"></ion-icon></a>
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default function Posts(){

    const posts = [{user:'meowed', profileImg:'./img/meowed 2.png', postImg:'./img/gato-telefone 1.png',commentsUser:'respondeai' , commentsImg:'./img/respondeai 2.png'}, {user:'barked', profileImg:'./img/barked 2.png', postImg:'./img/dog 1.png',commentsUser:'respondeai' , commentsImg:'./img/respondeai 2.png'}, {user:'barked', profileImg:'./img/barked 2.png', postImg:'./img/dog 1.png',commentsUser:'respondeai' , commentsImg:'./img/respondeai 2.png'}];

    return (
        <div class="posts">
            {posts.map(Post)}
        </div>
    )
}