import whuhan_pic from '../img/Wuhan_montage.png';

function Image(){
    return(
        <div id = "image-container">
            <a href="http://www.wuhan.gov.cn/">
                <img src = {whuhan_pic}/>
            </a>
        </div>
    );
}

export default Image;