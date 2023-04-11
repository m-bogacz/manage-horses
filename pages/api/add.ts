import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

const addObjectToJsonFile = (newItem: any) => {
  // Wyznacz ścieżkę do pliku JSON
  const filePath = path.join(process.cwd(), 'json/data.json');

  // Odczytaj dane z pliku JSON
  const fileData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileData);

  // Dodaj nowy obiekt do tablicy 'items'
  data.horses.push(newItem);

  // Zapisz zaktualizowane dane z powrotem do pliku JSON
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Odebranie obiektu z żądania
      const newObject = req.body;

      // Dodanie obiektu do pliku JSON
      addObjectToJsonFile(newObject);

      // Odpowiedź z kodem statusu 201 i obiektem
      res.status(201).json({ message: 'Obiekt dodany', newObject });
    } catch (error) {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Obsługa innych metod niż POST
    res.setHeader('Allow', 'POST');
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
