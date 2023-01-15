import React, { useState } from 'react'

export default function UserData() {
        let date = new Date()
        const [Input1, setInput1] = useState(5);
        const [Input2, setInput2] = useState(5);
        const [Input3, setInput3] = useState(new Date());
        const [Input4, setInput4] = useState('2022-01-02');
        const [Input5, setInput5] = useState(5);
        const [Input6, setInput6] = useState(5);
        let Result1 = 0

        const [days, setDays] = useState(true);
        const [days2, setDays2] = useState(true);
        const [Result2, setResult2] = useState(true);
        const [Count1, setCount1] = useState(true);
        const [Calculation, setCalculation] = useState(0);
        function multiplication(){
            if (Count1){
                Result1 = Input1 + Input2
            }else{
                Result1 = Input1 * Input2
            }
            return Result1
        }
        function isSumm(){
            let summ = 1;
            for (let o=1; o<=Input6; o++) {
                if (Input6%o==0) {
                summ = summ * o
                
                }
            }
        return summ
        }
        return(
        <div>
            <h2>Практическое Задание 3</h2>

            <h3>1)Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац.</h3>
            <input  type='number' value = {Input1} onChange = {event => setInput1(event.target.value)}/>
            <input  type='number' value = {Input2} onChange = {event => setInput2(event.target.value)}/>
            <button onClick={()=>setCount1(true)}>Сумма</button>
            <button onClick={()=>setCount1(false)}>Умножение</button>
            <p>Абзац 1: {multiplication()}</p>

            <h3>2-3)Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.</h3>
            <input  type='text' value = {Input3} onChange = {event => setInput3(event.target.value)}/>
            <input  type='text' value = {Input4} onChange = {event => setInput4(event.target.value)}/>
            <button onClick={()=>setResult2(typeof Input4 == typeof Input3?Math.ceil(Math.abs(new Date (Input3.split('-')[2]+'/'+Input3.split('-')[1]+'/'+Input3.split('-')[0]).getTime() - new Date(Input4.split('-')[2]+'/'+Input4.split('-')[1]+'/'+Input4.split('-')[0]).getTime()) / (1000 * 3600 * 24)):Math.ceil(Math.abs(new Date()- new Date(Input4.split('-')[2]+'/'+Input4.split('-')[1]+'/'+Input4.split('-')[0]).getTime()) / (1000 * 3600 * 24)))}> Посчитать разницу дней</button>
            <p>Разница дней равна {Result2}</p>

            <h3>4)Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.</h3>
            <input  type='text' value = {Input5} onChange = {event => setInput5(event.target.value)} onBlur ={() =>setDays(Input5)}/>
            <p>Число = {days}</p>

            <h3>5)Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац произведение делителей введенного числа.</h3>
            <input  type='text' value = {Input6} onChange = {event => setInput6(event.target.value)} onBlur ={() =>setDays2(isSumm())}/>
            <p>Число = {days2}</p>
        </div>
        )
            
}