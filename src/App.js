import ChatBot from "./chatbot";

function App() {
  return (
    <div className="bg-gradient-to-br from-lime-400 to-purple-400 dark:from-red-200 h-screen">
       <h1 className="text-4xl font-bold text-green-700 text-center font-serif pt-6 "> Green bot</h1>
        <div className="flex justify-center mt-10 ">
          <ChatBot />
        </div>
    </div>
  );
}

export default App;
