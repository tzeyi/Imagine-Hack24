function MyButton({ isPrimary, content, onClick }) {
  return (
    <>
        {isPrimary
            ? <button className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] "> content </button>
            : <button className="btn btn-active bg-black "> content </button>
        }
    </>
  )
}

export default MyButton