import ENV from '../components/env';
export const getPersonas = async () => {
    const response = await fetch(`${ENV.BACK_URL}getPersons`);
    const data = await response.json();
    return data;
  }
  export const deletePersona = async (id) => {
    const response = await fetch(`${ENV.BACK_URL}deletePerson/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la persona');
    }
  }
export const createPersona = async (persona) => {
  const response = await fetch(`${ENV.BACK_URL}createPerson`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(persona),
  });
  if (!response.ok) {
    throw new Error('Error al crear la persona' + response.statusText);
  }
  return await response.json();
}