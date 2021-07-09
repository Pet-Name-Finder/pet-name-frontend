import './App.css';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        
      </div>
    </ApolloProvider>
  );
}

export default App;
