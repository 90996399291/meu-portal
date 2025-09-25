export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Faltando ID do produto" });
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto", details: error.message });
  }
}
