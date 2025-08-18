$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let catsTemplate = await $.ajax({
            url: './catsTemplate.html'
        });
        let complitedTemplate = Handlebars.compile(catsTemplate);
        let context = {
            cats: window.cats
        };
        $('#allCats').html(complitedTemplate(context));
    }    
})

function showInfo(id) {
    $(`#${id}`).toggle();
}
