const notifications = (() => {
    $(document).on({
        //ajaxStart: () => $('#loadingBox').show(),
        ajaxStart: () => $('#loadingBox').fadeIn(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    })

    function showSuccess(message) {
        let successBox = $('#successBox');
        successBox.text(message);
        successBox.fadeIn();
        //setTimeout(() => infoBox.fadeOut(), 5000)
        successBox.fadeOut(5000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.fadeIn();
        //setTimeout(() => errorBox.fadeOut(), 5000)
        errorBox.fadeOut(5000);
    }

    function handleError(error) {
        showError(error.responseJSON.description);
    }

    return {
        showSuccess,
        showError,
        handleError
    }
})();

// let notifications = (() => {
//     $(document).on({
//         ajaxStart: () => $('#loadingBox').show(),
//         ajaxStop: () => $('#loadingBox').fadeOut()
//     });

//     function showSuccess(message) {
//         let infoBox = $('#successBox');
//         infoBox.text(message);
//         infoBox.fadeIn();
//         setTimeout(() => infoBox.fadeOut(), 3000)
//     }

//     function showError(message) {
//         let errorBox = $('#errorBox');
//         errorBox.text(message);
//         errorBox.fadeIn();
//         setTimeout(() => errorBox.fadeOut(), 3000)
//     }

//     function handleError(reason) {
//         showError(reason.responseJSON.description)
//     }

//     return {
//         showSuccess,
//         showError,
//         handleError
//     }
// })();
