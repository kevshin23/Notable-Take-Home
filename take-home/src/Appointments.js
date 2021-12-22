import React, {useState} from 'react';

export default function Appointments(physician, props) {
    const [apps, setApps] = useState(props);
    const [phys, setPhys] = useState(physician);

    const renderAppointments = () => {
        //sorted = 
        const rendered = apps.map((appointment, index) => (
            <li key={index}>
                <span>{appointment.lastName},</span>
                <span>{appointment.firstName}</span>
                <span>{appointment.time}</span>
                <span>{appointment.kind}</span>
            </li>
        ));
        return (
            <ul>
                {rendered}
            </ul>
        );
    }

    return (
        <div>
            {renderAppointments()}
        </div>
    )
}
