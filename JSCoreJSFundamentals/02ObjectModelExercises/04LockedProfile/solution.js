function solve() {
   let profiles = Array.from(document.getElementsByClassName('profile'))
   for (let profile of profiles) {
      let button = profile.getElementsByTagName('button')[0];
      button.addEventListener('click', function () {
         let radioUnlocked = profile.getElementsByTagName('input')[1];
         let hidenFieldId = profile.getElementsByTagName('div')[1].id;
         let hiddenFields = document.getElementById(`${hidenFieldId}`);
         if (radioUnlocked.checked && button.textContent === 'Show more') {
            hiddenFields.style.display = 'block';
            button.textContent = 'Hide it';
         } else if(radioUnlocked.checked && button.textContent === 'Hide it') {
            hiddenFields.style.display = 'none';
            button.textContent = 'Show more';
         }
      })
   }
}