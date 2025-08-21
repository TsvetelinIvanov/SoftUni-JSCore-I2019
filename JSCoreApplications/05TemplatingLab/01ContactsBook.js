$(async() => {
    try {
        //this.use('Handlebars', 'hbs');
        const contactListHtml = await $.get('/templates/contact-list.hbs');
        const contactInfoHtml = await $.get('/templates/contact-info.hbs');
        //const contactListHtml = await $.get('contact-list.hbs');
        //const contactInfoHtml = await $.get('contact-info.hbs');
        Handlebars.registerPartial('contactInfo', contactInfoHtml);
        const template = Handlebars.compile(contactListHtml);
        const context = {contacts};
        const renderedHtml = template(context);
        $('body').append(renderedHtml);
    } catch (error) {
        console.log(error);
    }
});

function showDetails(id) {
    $(`#${id}`).toggle();
}
