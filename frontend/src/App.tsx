import NotificationButton from "./components/NotificationButton";
import Header from "./components/header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <> {/*Fragment - usado quando se tem mais de um elemento*/}
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
