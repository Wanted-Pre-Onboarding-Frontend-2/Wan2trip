import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.generated.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      staleTime: 1000 * 60,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
