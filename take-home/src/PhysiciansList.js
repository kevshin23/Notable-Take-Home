import React, { useState, useEffect } from 'react'

export default function PhysiciansList() {
    const [physicians, setPhysicians] = useState([]);

    useEffect (() => {
        getPhysicians();
    }, []);

    const getPhysicians = async () => {
        try {
            const res = await fetch('http://localhost:1337/physicians');

            const data = await res.json();

            console.log(data)
            setPhysicians(data);
        } catch (err) {
            console.error(err);
        }
    }

    const renderPhysicians = () => {
        const rendered = physicians.map((physician, index) => (
            <li key={index}>
                <span>{physician.lastName + ", " + physician.firstName}</span>
            </li>
        ));

        return (
            <ul>
                {rendered}
            </ul>
        );
    }


    return (
        <div className="">
            {renderPhysicians()}
        </div>
    )
}
