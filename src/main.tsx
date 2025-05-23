import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Modal from "react-modal";
import {Toaster} from "react-hot-toast";

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <Toaster/>
    </StrictMode>,
)
