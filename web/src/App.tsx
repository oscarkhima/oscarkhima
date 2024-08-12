
import './styles/App.scss';
import './styles/fonts.scss';

function App() {

  const numDivs = 10;

  return (
    <>
    <section className='bacgroudGrid'>

    {[...Array(numDivs)].map((_, index) => (
        <div key={index} className="mi-div">
           <div className="line"></div>
        </div>
      ))}
     

    </section>
      <section className="maintenance">
        <div className="contentMaintenance">
          <div className="title syne ">WE'RE WORKING ON SOMETHING NEW</div>
          <div className="subtitle syne">CHECK BACK SOON</div>
        </div>

        <div className="caption syne">Oscar Khima - A web Designer & Developper</div>
      </section>
    </>
  );
}



export default App
