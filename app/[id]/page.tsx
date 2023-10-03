interface NoteInterface {
  id: number
  body: string
}

const getNote = async (id: number) => {
  return await fetch(`http://localhost:3001/notes/${id}`, { next: { revalidate: 0 } })
    .then(res => res.json())
}

export default async ({ params }: { params: { id: number } }) => {
  const note = await getNote(params.id)

  return (
    <p>
      { note.body }
    </p>
  )
}