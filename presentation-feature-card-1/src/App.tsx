import './App.css';
import Slide from './components/slide/Slide';

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <h2>Presentation</h2>
        <Slide />
        <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <button className="btn success">
            <span className="material-symbols-outlined"
              style={{
                      fontSize: "48px", 
                      borderRadius: "50%", 
                      backgroundColor: "#f0f0f0", 
                      padding: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>{"arrow_back_2"}
            </span>
          </button>
          <button className="btn success">
            <span className="material-symbols-outlined"
              style={{
                      fontSize: "48px", 
                      borderRadius: "50%", 
                      backgroundColor: "#f0f0f0", 
                      padding: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>{"play_arrow"}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App;