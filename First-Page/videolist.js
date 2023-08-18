let vidList = document.querySelectorAll('.vid-list-con .list');

vidList.forEach(iframe =>{
    iframe.onclick = () =>{
        let src = iframe.querySelector('.list-vid').src;
        let title = iframe.querySelector('.list-title').innerHTML;
        document.querySelector('.main-vid-con .main-vid').src = src;
        document.querySelector('.main-vid-con .main-vid').play();
        document.querySelector('.main-vid-con .main-vid-title').innerHTML = title;
    };
});