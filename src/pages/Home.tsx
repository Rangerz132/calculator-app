import Header from "../components/Header";
import ResultViewer from "../components/ResultViewer";
import Board from "../components/Board";

const Home = () => {
  return (
    <div className="max-w-[768px] h-screen p-6 flex flex-col items-center justify-center space-y-6 mx-auto">
      <Header />
      <ResultViewer />
      <Board />
    </div>
  );
};

export default Home;
