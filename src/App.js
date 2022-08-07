import Row from './components/Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner> </Banner>

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchOriginals}
        isPoster
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}></Row>
    </div>
  );
}

export default App;
