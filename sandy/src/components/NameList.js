import React from 'react';
import Person from './person';

function NameList(){
    const persons = [
        {
            id:1,
            name: "santos",
            age: 23
        },
        {
            id:1,
            name: "vasanth",
            age: 21
        },
        {
            id:1,
            name: "siva",
            age: 24
        }
    ]
    const personList = persons.map((person) => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
    // const names=['a','b','c']
    // const nameList = names.map(name=> <h2>{name}</h2>);
    // return <div>{nameList}</div>
}

export default NameList;
