import React, { useState } from 'react'

export default function UserData() {
   
        const [OneParagraph, setOneParagraph] = useState('Текст первого параграфа');
        const [TwoParagraph, setTwoParagraph] = useState('Текст второго параграфа');
        const [SimvolsNum, setSimvolsNum] = useState(0);
        const [age, setAge] = useState(20);
        const [degrees, setDegrees] = useState(50);
        const [Num1, setNum1] = useState(5);
        const [Num2, setNum2] = useState(5);
        const [Num3, setNum3] = useState(5);
        const [Num4, setNum4] = useState(5);
        const [Num5, setNum5] = useState(5);

        return(
        <div>
            <h2>Практическое Задание 2</h2>

            <h3>1)Сделайте два input-а. Пусть текст первого инпута выводится в первый абзац, а текст второго input - во второй абзац</h3>
            <p>Первый Параграф: { OneParagraph }</p>
            <p>Первый Параграф: { TwoParagraph }</p>
            <input  value = {OneParagraph} onChange = {event => setOneParagraph(event.target.value)}/>
            <input  value = {TwoParagraph} onChange = {event => setTwoParagraph(event.target.value)}/>

            <h3>2)Дан input. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в абзаце выводилось количество введенных в input символов.</h3>
            <p>Количество знаков: { SimvolsNum }</p>
            <input  onChange = {event => setSimvolsNum(event.target.value.length)}/>

            <h3>3)Дан input и абзац. В input вводится возраст пользователя. Сделайте так, чтобы при наборе текста, в абзаце автоматически появлялся год рождения пользователя.</h3>
            <p>Вы родились примерно в {new Date().getFullYear() - age} году</p>
            <input  type='number' value = {age} onChange = {event =>setAge(Math.abs(event.target.value))}/>

            <h3>4)Дан input и абзац. В input вводятся градусы Фаренгейта. Сделайте так, чтобы при наборе текста, в абзаце автоматически выполнялась конвертация в градусы Цельсия.</h3>
            <p>Если температура по Фаренгейту равна {degrees}, то температура по Цельсию примерно равна {Math.round((degrees -32)*5/9)}</p>
            <input  type='number' value = {degrees} onChange = {event =>setDegrees(event.target.value)}/>

            <h3>5)Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.</h3>
            <input  type='number' value = {Num1} onChange = {event =>setNum1(event.target.value)}/>
            <input  type='number' value = {Num2} onChange = {event =>setNum2(event.target.value)}/>
            <input  type='number' value = {Num3} onChange = {event =>setNum3(event.target.value)}/>
            <input  type='number' value = {Num4} onChange = {event =>setNum4(event.target.value)}/>
            <input  type='number' value = {Num5} onChange = {event =>setNum5(event.target.value)}/>
            <p>Среднее арифмитическое число равно{((Number(Num1)) + (Number(Num2)) + (Number(Num3)) + (Number(Num4)) + (Number(Num5)))/5}</p>
        </div>
        )
    
}