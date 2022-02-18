import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/shop/product/:prodId"
            element={<ProductDetailsPage />}
          />
          <Route path="/shop/category/" element={<ProductCtgsPage />} />
          <Route path="/shop/category/:ctgId" element={<ProductCtgPage />} />
          <Route path="/cart/" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
