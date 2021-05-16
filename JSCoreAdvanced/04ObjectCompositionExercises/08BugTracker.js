function trackBugs(){
    let bugTracker = (function(){
        let bugReports = [];
        let selector;
        let idCounter = 0;
        let report = function(author, description, reproducible, severity){
            bugReports[idCounter] = {
                ID: idCounter,
                author,
                description,
                reproducible,
                severity,
                status: 'Open'
            };
            idCounter++;

            if(selector){
                draw();
            }
        };        

        let setStatus = function(id, newStatus){
            bugReports[id].status = newStatus;
            if(selector){
                draw();
            }
        };
        
        let remove = function(id){
            bugReports = bugReports.filter(br => br.ID !== id);
            if(selector){
                draw();
            }
        };        

        let sort = function(method){
            switch(method){
                case 'author':
                bugReports.sort((a, b) => a.author.localeCompare(b.author));
                break;
                case 'severity':
                bugReports.sort((a, b) => a.severity - b.severity);
                break;
                // case 'ID':
                // bugReports.sort((a, b) => a.ID - b.ID);
                case 'ID':
                default:
                bugReports.sort((a, b) => a.ID - b.ID);
                break;
            }

            if(selector){
                draw();
            }
        };
        
        let output = function(inputSelector){
            selector = inputSelector;            
        };
        
        let draw = function(){
            $(selector).html('');
            for(let bugReport of bugReports){
                $(selector).append($('<div>').attr('id', 'report_' + bugReport.ID).addClass('report').append($('<div>').addClass('body').append($('<p>').text(bugReport.description))).append($('<div>').addClass('title').append($('<span>').addClass('author').text('Submitted by: ' + bugReport.author)).append($('<span>').addClass('status').text(bugReport.status + ' | ' + bugReport.severity))));
            }
        };        

        return {report, setStatus, remove, sort, output};
    })();
    return bugTracker;
}