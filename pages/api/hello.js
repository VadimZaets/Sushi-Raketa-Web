// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { name, message } = req.body;
  try {
    await handleFormInputAsync({ name, message });
    res.redirect(200, "/success");
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
