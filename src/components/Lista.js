import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getPersonas, deletePersona} from '../services/apiService'

const Lista = () => {
    const [personas, setPersonas] = useState([]);
  
    useEffect(() => {
        cargarPersonas();
        }
    , []);

    const cargarPersonas = async () => {
        const data = await getPersonas();
        setPersonas(data);
      };

      const eliminarPersona = async (id) => {
        await deletePersona(id);
        cargarPersonas();
      }
  
    return (
    <div className="container">
        <h2 className="my-3">Lista de Personas</h2>
        <ul className="list-group">
            {personas.map(persona => (
                console.log(persona),
                <li key={persona.id} className="list-group-item">
                    <span>Nombre: {persona.name}</span><br/>
                    <span>Email: {persona.email}</span><br/>
                    <span>Compañía: {persona.companies.name}</span><br/>
                    <span>Ciudad: {persona.addresses.city}</span><br/>
                    <button
                        className="btn btn-danger btn-sm float-end"
                        onClick={() => {
                            eliminarPersona(persona.id).then(() => {
                                setPersonas(personas.filter(p => p.id !== persona.id));
                            });
                        }}
                    >
                        Borrar
                    </button>
                </li>
            ))}
        </ul>
        <Link to="/crear" className="btn btn-primary mt-3">Crear Persona</Link>
    </div>
    );
  };
  
  export default Lista;