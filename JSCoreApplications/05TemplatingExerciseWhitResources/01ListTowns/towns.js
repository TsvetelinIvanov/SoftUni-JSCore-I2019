function attachEvents() {
    $('#btnLoadTowns').click(async () => {
        let $towns = $('#towns');
        let towns = $towns.val().split(',').filter(t => t !== '').map(t => {
            let object = {town: t};
            
            return object;
        });

        if (towns) {
            let source = $('#towns-template').html();
            let template = Handlebars.compile(source);
            let context = {towns};

            let html = template(context);
            $('#root').html(html);
            $towns.val('');
        }
    });
}
