import Link from "next/link"

interface NoteInterface {
  id: number
  body: string
}

const getNotes = async () => {
  return await fetch("http://localhost:3001/notes", { next: { revalidate: 0 } })
    .then(res => res.json())
}

export default async () => {
  const notes = await getNotes()

  return (
    <section className="notes">
      { notes && notes.map((note: NoteInterface) => (
        <Link href={`/${note.id}`} className="note" key={note.id}>
          <span>{ note.body }</span>
        </Link>
      )) }
    </section>
  )
}