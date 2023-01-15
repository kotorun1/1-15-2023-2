import React, { useState } from 'react'

export default function UserData() {
        const [checked1,setChecked1] = useState(false)
        const [checked2,setChecked2] = useState(false)
        const [checked3,setChecked3] = useState(false)
        const [checked4,setChecked4] = useState(false)
        const [checked5,setChecked5] = useState(false)
        const [checked6,setChecked6] = useState(false)
        const [text1,setText1] = useState('Нажмите на кнопку')
        return(<div>
            <h2>Практические задачи4</h2>
            <h3>1)Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания..</h3>
            <p>{text1}</p>
            <button onClick={()=>setText1(checked1?'Привет':'Пока')}> вывести текст</button>
            <input type="checkbox" checked = {checked1} onChange ={()=>setChecked1(!checked1)} />

            <h3>2)С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.</h3>
            <p>{checked2?'вы':'вы не'} знаете html</p>
            <input type="checkbox" checked = {checked2} onChange ={()=>setChecked2(!checked2)} />
            <p>{checked3?'вы':'вы не'} знаете css</p>
            <input type="checkbox" checked = {checked3} onChange ={()=>setChecked3(!checked3)} />
            <p>{checked4?'вы':'вы не'} знаете js</p>
            <input type="checkbox" checked = {checked4} onChange ={()=>setChecked4(!checked4)} />
            <h3>3)Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода.</h3>
            <p>тебе есть 18?</p>
            <input type="checkbox" checked = {checked5} onChange ={()=>setChecked5(!checked5)} />
            {checked5&&<p>Тебе 18</p>}
            <h3>4)Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его.</h3>
            <p>отметь чтобы отобразить абзац</p>
            <input type="checkbox" checked = {checked6} onChange ={()=>setChecked6(!checked6)} />
            {checked6&&<p>Абзац</p>}
        </div>
        )
            
}