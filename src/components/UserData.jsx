import React, { useState } from 'react'

export default function UserData() {
   
        const [name, setName] = useState('Имя');
        const [prename, setPrename] = useState('Введите сюда Имя');
        const [surname, setSurname] = useState('Фамилия');
        const [presurname, setPresurname] = useState('Введите сюда Фамилию');
        const [age, setAge] = useState(20);
        const [isBan, setIsBan] = useState(false);
        return(
        <div>
            <h2>Практическое Задание 1</h2>
            <p>Имя: { name }</p>
            <p>Фамилия: { surname }</p>
            <p>Возраст: { age }</p>
            <p>Забанен: {isBan? 'да' : 'нет'}</p>
            <button onClick={() => setIsBan(!isBan)}>{isBan?'Разбанить':'Забанить'}</button>
            <input  value = {prename} onChange = {event => setPrename(event.target.value)}/>
            <input  value = {presurname} onChange = {event => setPresurname(event.target.value)}/>
            <button onClick={() =>{setName(prename);setSurname(presurname)}}>Сохранить изменения</button>
            <button onClick={() => setAge(age>0?age -1:age)}>Уменшить Возраст </button>
            <button onClick={() => setAge(age +1)}>Увеличить Возраст </button>
        </div>
        )
    
}