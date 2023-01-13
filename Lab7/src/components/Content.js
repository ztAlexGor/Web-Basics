import React from 'react'


function paintListFunc(event){
        const elem = event.target;
        let index = elem.style.color == "black";
        
        if (elem.style.color == "black" || elem.style.color == ""){
            elem.style.color = "white";
            elem.style.backgroundColor = "black";
        }else{
            elem.style.color = "black";
            elem.style.backgroundColor = "white";
        }
}

function getFirstList(){
    return(
        <div>
            <p className="list-title">Хоббі:</p>
            <ul>
                <li>Велосипед</li>
                <li id="eight-element" onClick = {paintListFunc}>Туризм</li>
                <li id="nine-element" onClick = {paintListFunc}>Активний відпочинок</li>
            </ul>
        </div>
    ) 
}

function getSecondList(){
    return(
        <div>
            <p className="list-title">Улюблені фільми:</p>
            <ol>
                <li>Inception</li>
                <li>Interstellar</li>
                <li>GOT</li>
            </ol>
        </div>
    ) 
}

function getMainStory(){
    return(
        <div className="main-story">
            <p>
                <b>Уха́нь</b> <i>(кит.武漢)</i> — місто в Китаї, провінція Хубей. Адміністративний центр провінції.
                <br/> Розташоване в Центральному Китаї, в районі злиття річок Янцзи та Ханьшуй.
                <br/> Одне з найбільших міст на річці Янцзи, комерційний осередок, центр чорної металургії.
            </p>
        </div>
        )
}

class  Content extends React.Component{
    render(){
        return(
        <div className="main-container">
            <div className="opener_text">
                <p>Дата і місце народження: 09.05.2000 м.Київ</p>
                <p>Освіта: КПІ ім. Ігоря Сікорського</p>
                {getFirstList()}
                {getSecondList()}
            </div>
            {getMainStory()}
        </div> 
    );
    }
}
export default Content;
