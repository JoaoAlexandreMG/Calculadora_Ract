// Calculator.js
import React from 'react';
import Display from './Display';
import Button from './Button';

function Calculator(props) {
    return (
        <div className="calculator">
            <div className="sup">
                <div className="titles">
                    <h1>CASIO</h1>
                    <h3>fx-991ES PLUS</h3>
                    <h3>natural-v.p.a.m</h3>
                </div>
                <div className="solar">
                    <div className="solar_charge"></div>
                    <h3>john edition</h3>
                </div>
            </div>
            <Display value={props.displayValue} />
            <div className="buttons">
                <div className="line1">
                    <Button onClick={() => props.handleButtonClick('7')} id="seven">7</Button>
                    <Button onClick={() => props.handleButtonClick('8')} id="eight">8</Button>
                    <Button onClick={() => props.handleButtonClick('9')} id="nine">9</Button>
                    <Button onClick={props.handleDelete} id="del">DEL</Button>
                    <Button onClick={props.handleClear} id="ac">AC</Button>
                </div>
                <div className="line2">
                    <Button onClick={() => props.handleButtonClick('4')} id="four">4</Button>
                    <Button onClick={() => props.handleButtonClick('5')} id="five">5</Button>
                    <Button onClick={() => props.handleButtonClick('6')} id="six">6</Button>
                    <Button onClick={() => props.handleOperation('add')} id="add">+</Button>
                    <Button onClick={() => props.handleOperation('rest')} id="rest">%</Button>
                    <Button onClick={() => props.handleOperation('multiply')} id="multiply">×</Button>

                </div>
                <div className="line3">
                    <Button onClick={() => props.handleButtonClick('1')} id="one">1</Button>
                    <Button onClick={() => props.handleButtonClick('2')} id="two">2</Button>
                    <Button onClick={() => props.handleButtonClick('3')} id="three">3</Button>
                    <Button onClick={() => props.handleOperation('subtract')} id="sub">-</Button>
                    <Button onClick={() => props.handleOperation('pot')} id="pot">^</Button>
                    <Button onClick={() => props.handleOperation('divide')} id="divide">÷</Button>
                </div>
                <div className="line4">
                    <Button onClick={() => props.handleButtonClick('0')} id="zero">0</Button>
                    <Button onClick={() => props.handleButtonClick('.')} id="dot">.</Button>
                    <Button onClick={props.handleEqual} id="equal">=</Button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
