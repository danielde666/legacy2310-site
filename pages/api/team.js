const endpoint = "https://script.google.com/macros/s/AKfycbxHyXqxAWKAuPfSa2wYF4xTB4ulL-B9sgxqs91We1AU_ykUpFLkVu1RQug-xB_KIdriBQ/exec";

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const response = await fetch(endpoint);
      const data = await response.json();
      return res.status(200).json(data);
    } else if (req.method === 'POST') {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      const result = await response.json();
      return res.status(200).json(result);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
