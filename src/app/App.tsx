import QueryProvider from "./providers/query-provider";
import Router from "./routes/router";

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}

export default App;

