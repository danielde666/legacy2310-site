import { useEffect, useState } from 'react';

export default function AdminTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/team')
      .then(res => res.json())
      .then(data => {
        setTeam(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...team];
    updated[index][field] = value;
    setTeam(updated);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('');

    const res = await fetch('/api/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(team)
    });

    const result = await res.json();
    setSaving(false);
    setStatus(result.message || '✅ Saved!');
  };

  if (loading || saving) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="animate-fade-in transition-opacity duration-700 min-h-screen p-8 bg-black text-white space-y-8">
      <h1 className="text-3xl font-bold">Team Editor</h1>

      {status && (
        <div className="text-green-400 text-sm mb-4 animate-fade-in">
          {status}
        </div>
      )}

      {team.map((member, i) => (
        <div key={i} className="space-y-2 border-b border-gray-700 pb-6">
          <input
            type="text"
            value={member.name}
            onChange={(e) => handleChange(i, 'name', e.target.value)}
            placeholder="Name"
            className="w-full bg-zinc-900 p-2 rounded"
          />
          <input
            type="text"
            value={member.role}
            onChange={(e) => handleChange(i, 'role', e.target.value)}
            placeholder="Role"
            className="w-full bg-zinc-900 p-2 rounded"
          />
          <input
            type="email"
            value={member.email}
            onChange={(e) => handleChange(i, 'email', e.target.value)}
            placeholder="Email"
            className="w-full bg-zinc-900 p-2 rounded"
          />
          <input
            type="text"
            value={member.photo}
            onChange={(e) => handleChange(i, 'photo', e.target.value)}
            placeholder="Image URL"
            className="w-full bg-zinc-900 p-2 rounded"
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200"
      >
        Save Changes
      </button>
    </div>
  );
}
