import { notFound } from "next/navigation"

const getNote = async (id: number) => {
  return await fetch(`http://localhost:3001/notes/${id}`, { next: { revalidate: 0 } })
    .then(res => res.json())
}

export default async ({ params }: { params: { id: number } }) => {
  const note = await getNote(params.id)
  if(!Object.keys(note).length) notFound()

  return (
    <p>
      { note.body }
    </p>
  )
}