import React from 'react';

function Player() {
  // Current FC Barcelona squad for 2024–25
  const players = [
    { id: 1, name: "Marc-André ter Stegen", position: "Goalkeeper", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=1200&height=750" },
    { id: 2, name: "Ronald Araújo", position: "Defender", image: "https://www.pantau.com/_next/image?url=https%3A%2F%2Fpantau.sgp1.cdn.digitaloceanspaces.com%2Fimages%2F20241012-3921-ronald-araujo.jpg&w=1200&q=75" },
    { id: 3, name: "Jules Koundé", position: "Defender", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/34c0073f-7235-4776-a508-8fccc377f57b/23-Kounde-M.jpg?width=1200&height=750" },
    { id: 4, name: "Pau Cubarsí", position: "Defender", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/77bc3c02-a6ac-43ea-b5aa-3ec8a9a26289/02-Cubarsi-M.jpg?width=1200&height=750" },
    { id: 5, name: "Alejandro Balde", position: "Defender", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/dee2330a-0f74-45a4-8757-fc12dd7eec03/03-Balde-M.jpg?width=1200&height=750" },
    { id: 6, name: "Andreas Christensen", position: "Defender", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/a7d1b4c0-45f0-496d-89e9-576a49f5cdb0/15-Christensen-M.jpg?width=1200&height=750" },
    { id: 7, name: "Iñigo Martínez", position: "Defender", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/090c9e0c-4446-44c0-ba4b-995dd818cb24/05-Martinez-M.jpg?width=1200&height=750" },
    { id: 8, name: "Gavi", position: "Midfielder", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/d650999a-797a-4326-b0fe-cc5e1d8a9322/06-Gavi-M.jpg?width=1200&height=750" },
    { id: 9, name: "Pedri", position: "Midfielder", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/d650999a-797a-4326-b0fe-cc5e1d8a9322/06-Gavi-M.jpg?width=1200&height=750" },
    { id: 10, name: "Frenkie de Jong", position: "Midfielder", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/d650999a-797a-4326-b0fe-cc5e1d8a9322/06-Gavi-M.jpg?width=1200&height=750" },
    { id: 11, name: "Dani Olmo", position: "Midfielder", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/0d46bf0d-5149-4908-9187-35813907233d/20-Olmo-M.jpg?width=1200&height=750" },
    { id: 12, name: "Fermín López", position: "Midfielder", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/caa869d5-91f6-4d7e-9b60-8eba98ac60f4/16-Fermin-M.jpg?width=1200&height=750" },
    { id: 13, name: "Raphinha", position: "Forward", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=1200&height=750" },
    { id: 14, name: "Lamine Yamal", position: "Forward", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/c73a4770-0bf1-452f-9ebd-b0f8c33412a0/19-Lamine-M.jpg?width=1200&height=750" },
    { id: 15, name: "Ferran Torres", position: "Forward", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/673eb7cc-5a07-4b94-a6d1-310fc7ca9248/07-Ferran_Torres-M.jpg?width=1200&height=750" },
    { id: 16, name: "Robert Lewandowski", position: "Forward", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=1200&height=750" },
    { id: 17, name: "Ansu Fati", position: "Forward", image: "https://www.fcbarcelona.com/photo-resources/2024/10/13/6694bfce-d682-4af7-bf06-151d747553a7/10-Ansu_Fati-M.jpg?width=431&height=269" },
  ];

  return (
    <div className='bg-blue-950 min-h-screen py-12 px-4'>
      <div className="backdrop-blur-sm bg-gray-400/20 rounded-xl p-6 mt-20 w-full max-w-6xl mx-auto shadow-2xl border border-gray-500/30">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">FC Barcelona Players</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {players.map(player => (
            <div 
              key={player.id} 
              className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{player.name}</h3>
                <p className="text-blue-200">{player.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Player;
