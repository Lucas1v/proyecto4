import React from "react";
import { connect } from "react-redux";

const Calcu =({changeTextO, complet, clear, complete, changeText, text}) => {
    return (
        <div id="calculadora">
            <div id="allways">{text}</div>
            <div id="display">{complet}</div>
            <span id="clear" onClick={() => clear("CLEAR")}>AC</span>
            <span id="divide" className="grisclaro" onClick={() => changeTextO("CHANGEO", 0)}>/</span>
            <span id="multiply" className="grisclaro" onClick={() => changeTextO("CHANGEO", 1)}>X</span>
            <span id="zero" className="gris" onClick={() => changeText("CHANGE", 0)}>0</span>
            <span id="one" className="gris" onClick={() => changeText("CHANGE", 1)}>1</span>
            <span id="two" className="gris" onClick={() => changeText("CHANGE", 2)}>2</span>
            <span id="three" className="gris" onClick={() => changeText("CHANGE", 3)}>3</span>
            <span id="four" className="gris" onClick={() => changeText("CHANGE", 4)}>4</span>
            <span id="five" className="gris" onClick={() => changeText("CHANGE", 5)}>5</span>
            <span id="six" className="gris" onClick={() => changeText("CHANGE", 6)}>6</span>
            <span id="seven" className="gris" onClick={() => changeText("CHANGE", 7)}>7</span>
            <span id="eight" className="gris" onClick={() => changeText("CHANGE", 8)}>8</span>
            <span id="nine" className="gris" onClick={() => changeText("CHANGE", 9)}>9</span>
            <span id="subtract" className="grisclaro" onClick={() => changeTextO("CHANGEM", 0)}>-</span>
            <span id="add" className="grisclaro" onClick={() => changeTextO("CHANGEO", 3)}>+</span>
            <span id="equals" onClick={() => complete()}>=</span>
            <span id="decimal" className="gris" onClick={() => changeText("CHANG", 0)}>.</span>
        </div>
    )
}

const mapStateToPops = state => ({
    text: state.text,
    complet: state.complet
});

const mapDispatchToProps = dispatch => ({
    changeText(name, id) {
        dispatch({
            type: name,
            id: id
        });
    },
    complete(){
        dispatch({
            type: "RESULT"
        });
    },
    clear(name){
        dispatch({
            type: name
        })
    },
    changeTextO(name, id){
        dispatch({
            type: name,
            id: id
        })
    }
});

export default connect(mapStateToPops, mapDispatchToProps)(Calcu);