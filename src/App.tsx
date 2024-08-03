import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

 

function App() {
   
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  ) 
}

export default App
