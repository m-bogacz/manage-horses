import { HorseEntity } from '@/utils/types';

export async function addObject(newObject: HorseEntity) {
  console.log(newObject);
  const response = await fetch('http://localhost:3000/api/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObject),
  });

  if (!response.ok) {
    throw new Error('Problem z dodaniem obiektu');
  }

  return response.json();
}
