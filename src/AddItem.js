import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input 
        type="text"
        id="addItem"
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add Item"
        required
      />
      <button
        type="submit"
        arial-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem