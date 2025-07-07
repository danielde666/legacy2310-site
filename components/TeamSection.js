import { useEffect, useState } from 'react';

export default function TeamSection() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error('Error fetching team:', err));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Meet the Team</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A trio of experts wrapping companies from the inside out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black via-gray-900 to-neutral-800 rounded-2xl border border-neutral-700 p-6 text-center transition hover:scale-[1.02] hover:border-green-200 duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover bg-white mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
