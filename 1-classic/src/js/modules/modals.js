export const initModals = () => {
    const openModal = (modalSelector) => {
        const modal = document.querySelector(modalSelector);

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    const openModalByDelay= (modalSelector, delay = 60000) => {
        setTimeout(() => openModal(modalSelector), delay);
    };
    const closeModal = (modalSelector) => {
        const modal = document.querySelector(modalSelector);

        modal.style.display = 'none';
        document.body.style.overflow = '';
    };
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }

                openModal(modalSelector);
            });
        });
        modal.addEventListener('click', (event) => {
            if (modal === event.target) {
                closeModal(modalSelector);
            }
        });
        close.addEventListener('click', () => {
            closeModal(modalSelector);
        });
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    openModalByDelay('.popup');
};