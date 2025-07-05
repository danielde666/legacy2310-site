export default async function handler(req, res) {
    const endpoint = "https://script.google.com/macros/s/AKfycbxHyXqxAWKAuPfSa2wYF4xTB4ulL-B9sgxqs91We1AU_ykUpFLkVu1RQug-xB_KIdriBQ/exec";
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Fetch failed", error);
      res.status(500).json({ error: "Failed to fetch team data" });
    }
  }
  