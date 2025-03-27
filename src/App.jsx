
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#2a2e35] p-4 md:p-10 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3 text-[#1f4e79]">Sofa-cile</h1>
        <p className="text-lg text-[#4a5568]">
          Spécialistes du nettoyage de copropriétés en Auvergne Rhône-Alpes
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 text-lg bg-[#1f4e79] hover:bg-[#163d5c] text-white px-4 py-2 rounded"
        >
          Demander un devis gratuit
        </button>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#1f4e79]">Notre expertise</h2>
          <p>
            Chez Sofa-cile, nous avons fait du nettoyage de copropriété notre spécialité.
            Notre équipe jeune et professionnelle s'engage à rendre vos espaces communs impeccables,
            dans la discrétion et avec une grande régularité.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#1f4e79]">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc list-inside">
            <li>Équipe qualifiée et motivée</li>
            <li>Disponibilité 7j/7</li>
            <li>Prestations sur-mesure</li>
            <li>Respect de l’environnement</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1f4e79]">Nos services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Nettoyage des parties communes",
            "Lavage de vitres",
            "Sortie des poubelles",
            "Désinfection des zones sensibles",
            "Intervention après travaux",
            "Suivi régulier ou ponctuel"
          ].map((service, i) => (
            <div key={i} className="bg-white rounded shadow p-4 font-medium text-[#2a2e35]">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1f4e79]">Témoignages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Une équipe sérieuse et réactive. Je recommande à 100% !",
            "Depuis qu'on travaille avec Sofa-cile, nos résidents sont ravis.",
            "Service de qualité, toujours ponctuel et avec le sourire."
          ].map((review, i) => (
            <div key={i} className="bg-white rounded shadow p-4 italic text-gray-700">
              "{review}"
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4 text-[#1f4e79]">Intervention dans toute la région Auvergne Rhône-Alpes</h2>
        <p className="text-gray-600">Demandez votre devis, nous nous adaptons à vos besoins.</p>
      </section>

      <footer className="text-center text-gray-500 text-sm">
        <p>Contact : <a href="mailto:contact@sofacile.eu" className="underline text-[#1f4e79]">contact@sofacile.eu</a> | 07 83 57 07 57</p>
        <p>&copy; {new Date().getFullYear()} Sofa-cile. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#2a2e35] p-10">
      <h2 className="text-4xl font-bold text-[#1f4e79] mb-4">Demande de devis</h2>
      <p className="mb-6">Remplissez ce formulaire pour obtenir un devis personnalisé :</p>
      <form className="grid gap-4 max-w-xl" encType="multipart/form-data">
        <input type="text" placeholder="Nom complet" className="p-3 border border-gray-300 rounded" required />
        <input type="email" placeholder="Adresse email" className="p-3 border border-gray-300 rounded" required />
        <input type="text" placeholder="Adresse complète de l’intervention" className="p-3 border border-gray-300 rounded" required />
        <textarea placeholder="Détaillez votre besoin (vitres, parties communes, etc.)" rows={5} className="p-3 border border-gray-300 rounded" required></textarea>
        <label className="font-medium text-[#1f4e79]">Ajouter des photos ou vidéos :</label>
        <input type="file" accept="image/*,video/*" multiple className="p-2 border border-gray-300 rounded" />
        <button className="bg-[#1f4e79] hover:bg-[#163d5c] text-white px-4 py-2 rounded">Envoyer la demande</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
