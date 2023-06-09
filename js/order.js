
"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const orderCustomer = document.getElementById('orderCustomer');
    console.log(orderCustomer);
    orderCustomer.addEventListener('submit', formSend);

    const close = document.querySelector('.close');
    close.addEventListener('click', closePop); // or document

    function closePop() {
        let popGmail = document.querySelector('.thanks');

        body.style.overflow = 'auto';

        popGmail.style.visibility = 'hidden';
        popGmail.style.opacity = 0;
        popGmail.style.transition = 'all 0.3s ease 0s';

    }

    // =============== validation form ==========================================================================================================================
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(orderCustomer);

        let formData = new FormData(orderCustomer);

        if (!error) {

        }


        //===== user information ======================================================================================================================================
    };

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._miss');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
            input.addEventListener('focus', function (event) {
                formRemoveError(input)
            });
        }
        return error;
    }

    function formAddError(input) {
        input.previousElementSibling.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.previousElementSibling.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }




    // ================== pop-up =========================================================================



});

// =========================  ===========================================================================================================


