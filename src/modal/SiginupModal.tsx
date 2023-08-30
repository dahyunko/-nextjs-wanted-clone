import React from "react"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface ModalProps{
    showModal: boolean;
    closeModal: ()=>void;
    errorMessage: string;
}

const Modal: React.FC<ModalProps> = ({showModal, closeModal, errorMessage}) =>{
    if(!showModal) return null;

    return(
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center'>
            <div className="bg-white rounded w-10/12 h-64 md:w-1/3 p-10 flex justify-center items-center">
                <div>
                    <div className="modal-content mb-10 font-semibold text-xl">
                        <p>Oops! Something went wrong. Please try again.</p>
                        <p className="text-red-500">{errorMessage}</p>
                    </div>
                    <button onClick={closeModal} className="w-full flex text-gray-500 justify-center text-center">
                        <span>Close</span>
                        <CloseRoundedIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
