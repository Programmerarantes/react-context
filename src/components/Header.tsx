import { useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext"

export const Header = () => {
    const postsCtx = useContext(PostContext)

    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postsCtx?.dispatch({ type: 'add', payload: { title: titleInput, body: bodyInput}})
            setTitleInput('')
            setBodyInput('')
        } 
    }
    
    return (
            <header>
                <h1 className="text-3xl">Título da página</h1>

                <div className="flex flex-col border border-dotted border-gray-400 p-3">
                    <input
                        type="text"
                        placeholder="Digite um título"
                        className="border border-gray-300 p-2 text-black text-xl"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                    />
                    <textarea
                        placeholder="Digite um texto"
                        className="h-24 border border-gray-300 p-2 text-black text-xl"
                        value={bodyInput}
                        onChange={e => setBodyInput(e.target.value)}
                    ></textarea>
                    <button 
                        className="bg-blue-500 p-3 text-white rounded-md"
                        onClick={handleAddButton}
                    >Adicionar</button>
                </div>
            </header>

    )
}