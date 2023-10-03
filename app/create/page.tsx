"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default () => {
  const router = useRouter()
  const [body, setBody] = useState("")
  const [creating, setCreating] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setCreating(true)
    await axios.post(`http://localhost:3000/api/create`, { body })
      .then(res => router.push("/"))
  }

  return (
    <section className="create">
      <form method="post" onSubmit={handleSubmit}>
        <textarea placeholder="Text" value={body} onChange={e => setBody(e.target.value)} />
        <div className="cont">
          <span className={`creating ${creating ? "" : "hidden"}`}>Creating...</span>
          <button className="btn">Create</button>
        </div>
      </form>
    </section>
  )
}