const notifications = (() => {
  $(document).on({
    ajaxStart: () => $('#loadingBox').fadeIn(),
    ajaxStop: () => $('#loadingBox').fadeOut()
  })

  function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.find('span').text(message);
    infoBox.fadeIn();
    infoBox.fadeOut(3000);
  }

  function showError(message) {
    let errorBox = $('#errorBox');
    errorBox.find('span').text(message);
    errorBox.fadeIn();
    errorBox.fadeOut(3000);
  }

  function handleError(reason) {
    showError(reason.responseJSON.description);
  }

  return {
    showInfo,
    showError,
    handleError
  }
})();