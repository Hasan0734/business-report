import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';


const Modals = ({children}) => {
    const [openModal, setOpenModal] = useState(true)
    return (
        <>
            <Modal
                centered
                fade={false}
                fullscreen="xl"
                size="xl"
                isOpen={openModal}
                toggle={() => setOpenModal(!openModal)}
            >
                <ModalBody className="h-screen">
                    <div className="pl-2 sm:pl-10">
                        <div className="flex justify-end pt-10 pr-5">

                            <i onClick={() => setOpenModal(!openModal)} className="fas fa-times text-xl cursor-pointer"></i>

                        </div>
                        {children}
                    </div>
                </ModalBody>

            </Modal>
        </>
    );
};

export default Modals;