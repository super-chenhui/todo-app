export default function Link() {
  return (
    <footer>
      <button onClick={() => { window.open("https://github.com/uxdruh/todo-app", "_blank") }}>
      <i className="fa-brands fa-github fa-beat-fade fa-2xl"></i>
      </button>
    </footer>
  )

}