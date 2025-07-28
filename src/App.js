import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const next = () => setStep((s) => s + 1);

  const simulateAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      next();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl space-y-6">
        {step === 1 && (
          <Card className="shadow-xl">
            <CardContent className="text-center space-y-4">
              <h1 className="text-2xl font-bold">Welkom bij HomeCheck AI</h1>
              <p className="text-gray-600">Upload je woningfoto’s en krijg een automatische inschatting van mogelijke renovatiekosten.</p>
              <Button onClick={next} className="w-full">Start je Analyse</Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="shadow-xl">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Stap 1: Upload je foto's</h2>
              <Input type="file" multiple onChange={(e) => setPhotos([...e.target.files])} />
              <Button onClick={next} className="w-full mt-4" disabled={photos.length === 0}>Volgende</Button>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="shadow-xl">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Stap 2: Extra informatie</h2>
              <Input placeholder="Postcode of locatie" value={location} onChange={(e) => setLocation(e.target.value)} />
              <Input placeholder="Type woning" value={type} onChange={(e) => setType(e.target.value)} />
              <Input placeholder="Bouwjaar" value={year} onChange={(e) => setYear(e.target.value)} />
              <Button onClick={simulateAnalysis} className="w-full mt-4">Start Analyse</Button>
            </CardContent>
          </Card>
        )}

        {step === 4 && loading && (
          <Card className="shadow-xl">
            <CardContent className="text-center">
              <p className="text-blue-600 font-semibold">AI analyseert je foto's...</p>
            </CardContent>
          </Card>
        )}

        {step === 5 && (
          <Card className="shadow-xl">
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Resultaat</h2>
              <p><strong>Keuken:</strong> Verouderd – €8.000 – €12.000</p>
              <p><strong>Ramen:</strong> Enkel glas – €6.000 – €9.000</p>
              <p><strong>Muren:</strong> Vochtplekken – €2.000 – €4.000</p>
              <p className="font-bold">Totaal: €16.000 – €25.000</p>
              <Button onClick={next} className="w-full">Verder</Button>
            </CardContent>
          </Card>
        )}

        {step === 6 && (
          <Card className="shadow-xl">
            <CardContent className="space-y-4 text-center">
              <h2 className="text-xl font-semibold">Wat wil je doen met het rapport?</h2>
              <Button className="w-full">Stuur naar notaris</Button>
              <Button className="w-full">Vraag offerte aan aannemer</Button>
              <Button className="w-full">Download als PDF</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
