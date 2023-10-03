import axios from "axios"

export const POST = async (req: Request) => {
  const { body } = await req.json()
  await axios.post(`http://localhost:3001/notes`, { body })
  return Response.json(true)
}