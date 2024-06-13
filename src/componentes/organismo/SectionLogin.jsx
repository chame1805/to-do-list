import Field from "../moleculas/Field";
import Button from "../atomos/Button";
import { useState } from "react";
import Swal from "sweetalert2";
import './SectionLogin.css';

function SectionLogin() {
    const [datos, setDatos] = useState('');
    const [displayedMessages, setDisplayedMessages] = useState([]);

    const handleClick = () => {
        console.log("Botón clicado");
        Swal.fire({
            title: 'Tarea guardada',
            html: `${datos}<br/>`,
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        setDisplayedMessages(prevMessages => [...prevMessages, datos]);
        setDatos('');  // Clear the input field
    };

    const handleDelete = (index) => {
        setDisplayedMessages(prevMessages => prevMessages.filter((_, i) => i !== index));
    };

    return (
        <div className="section-login">
            <Field text="Tareas" type="text" placeholder="acción" val={datos} fnVal={setDatos} />
            <Button text="Guardar datos" onClick={handleClick} />
            {displayedMessages.map((message, index) => (
                <div className="task" key={index}>
                    <div className="task-content">
                        <p>{message}</p>
                        <Button text="Completar" onClick={() => handleDelete(index)} className="complete-button" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionLogin;
