function Story(props) {
    return (
        <div class="story">
            <a href=""><img class="story-border" src="./img/stories_background 1.png" /></a>
            <a href=""><img class="story-user" src={props.profileImg} /></a>
            <p>{props.user}</p>
        </div>
    )
}

export default function Stories(){

    const stories = [{user:'9gag' , profileImg:'./img/9gag 1.png' }, {user:'meowed' , profileImg:'./img/meowed 1.png' }, {user:'barked' , profileImg:'./img/barked 1.png' }, {user:'nathanwpyle...' , profileImg:'./img/nathanwpylestrangeplanet 1.png' }, {user:'wawawiwac..' , profileImg:'./img/wawawiwacomicsa 1.png' }, {user:'respondeai' , profileImg:'./img/respondeai 1.png' }, {user:'filomoderna' , profileImg:'./img/filomoderna 1.png' }, {user: 'memeriago.', profileImg:'./img/memeriagourmet 1.png'}];

    return (
        <div class="stories">
            <div class="arrow"><img src="./img/chevron-forward-circle 1.png" /></div>
            <div class="story-container">
                {stories.map(Story)}
            </div>
        </div>
    )
}