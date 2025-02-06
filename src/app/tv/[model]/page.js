import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default function TVPage({ params }) {
  const { model } = params;

  // Load specs.json file
  const specsPath = path.join(process.cwd(), 'app/tv', model, 'specs.json');

  let specs;
  try {
    specs = JSON.parse(fs.readFileSync(specsPath, 'utf8'));
  } catch (error) {
    return notFound(); // Show 404 if model not found
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{specs.name}</h1>
      <p className="text-lg">{specs.description}</p>
      <ul className="mt-4">
        {Object.entries(specs.features).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
