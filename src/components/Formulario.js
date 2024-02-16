// Formulario.js
import React, { useState } from 'react';
import { createPersona } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

function Formulario() {
    const [persona, setPersona] = useState({
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
          }
      });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPersona(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleAddressChange = (event) => {
        const { name, value } = event.target;
        setPersona(prevState => ({
          ...prevState,
          address: {
            ...prevState.address,
            [name]: value
          }
        }));
      }
      
      const handleGeoChange = (event) => {
        const { name, value } = event.target;
        setPersona(prevState => ({
          ...prevState,
          address: {
            ...prevState.address,
            geo: {
              ...prevState.address.geo,
              [name]: value
            }
          }
        }));
      }
      const handleCompanyChange = (event) => {
        const { name, value } = event.target;
        setPersona(prevState => ({
          ...prevState,
          company: {
            ...prevState.company,
            [name]: value
          }
        }));
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createPersona(persona);
        setPersona({
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        });
        navigate('/'); // redirige al usuario a la página principal después de crear una persona
    }

    return (
        <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card mt-4">
                <div className="card-header bg-primary text-white">
                    Crear Persona
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" name="name" value={persona.name} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre de usuario</label>
                            <input type="text" name="username" value={persona.username} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value={persona.email} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Calle</label>
                        <input type="text" name="street" value={persona.address.street} onChange={handleAddressChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Suite</label>
                        <input type="text" name="suite" value={persona.address.suite} onChange={handleAddressChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ciudad</label>
                        <input type="text" name="city" value={persona.address.city} onChange={handleAddressChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Código Postal</label>
                        <input type="text" name="zipcode" value={persona.address.zipcode} onChange={handleAddressChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Latitud</label>
                        <input type="text" name="lat" value={persona.address.geo.lat} onChange={handleGeoChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Longitud</label>
                        <input type="text" name="lng" value={persona.address.geo.lng} onChange={handleGeoChange} className="form-control" required />
                    </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" name="phone" value={persona.phone} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sitio web</label>
                            <input type="text" name="website" value={persona.website} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre de la empresa</label>
                            <input type="text" name="name" value={persona.company.name} onChange={handleCompanyChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Eslogan de la empresa</label>
                            <input type="text" name="catchPhrase" value={persona.company.catchPhrase} onChange={handleCompanyChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bs</label>
                            <input type="text" name="bs" value={persona.company.bs} onChange={handleCompanyChange} className="form-control" required />
                        </div>

    
                        <button type="submit" className="btn btn-primary">Crear</button>
                        <button className="btn btn-danger ml-3" onClick={() => navigate('/')}>Volver</button>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
    
      );
}

export default Formulario;