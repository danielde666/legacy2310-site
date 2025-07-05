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
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {team.map((member, idx) => (
          <div key={idx} className="text-center space-y-4">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white bg-white"
            />
            <div className="text-xl font-semibold">{member.name}</div>
            <div className="text-gray-400">{member.role}</div>
            <div className="text-sm text-gray-500">{member.email}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
