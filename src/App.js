import ImageCol from "./components/ImageCol";
import Navbar from "./components/Navbar";
import PointList from "./components/PointList";
import TextDescription from "./components/TextDescription";
import deskBackground from "./Assets/Device Image/Desktop player.png" 
import "./styles/styles.css";

const points1 = [
  {
    type: "text",
    content: "Download the Moodagent app here",
  },
  {
    type: "buttons",
    content: ["Install", ],
  },
  {
    type: "text",
    content: "Follow the on-screen instructions to create your account",
  },
];


const points2 = [
  {
    type: "text",
    content: "Download the Moodagent app here",
  },
  {
    type: "buttons",
    content: ["macOS", "Windows"],
  },
  {
    type: "text",
    content: "Follow the on-screen instructions to create your account",
  },
];


function App() {
  return (
    <div className="container-fluid bg-dark">
      <div className="container-fluid ms-1 min-vh-100">
        <Navbar />
        <div className="container-fluid mt-5">
          <div className="row justify-content-start">
            <div className="col">
              <TextDescription
                header="Getting Started"
                subHeader="Moodagent on mobile:"
              />
              <PointList points={points1}/>
            </div>
            <div className="col back-img min-vh-100 d-flex flex-wrap align-items-center">
              <ImageCol imgSrc={deskBackground}/>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row justify-content-start">
          <div className="col back-img min-vh-100 d-flex flex-wrap align-items-center">
              <ImageCol imgSrc={deskBackground}/>
            </div>
            <div className="col">
            <TextDescription
                header="Moodagent on desktop:"
              />
              <PointList points={points2}/>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
