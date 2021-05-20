const eventService = (() => {
    function createEvent(data) {
        return kinvey.post('appdata', 'events', 'kinvey', data);
    }

    function showEvents(){
        return kinvey.get('appdata', `events?query={}&sort={"peopleInterestedIn": -1}`, 'kinvey');
    }

    function showEvent(id){
        return kinvey.get('appdata', `events/${id}`, 'kinvey');
    }

    function showMyEvents(userId){
        return kinvey.get('appdata', `events/?query={"organizer":"${userId}"}`, 'kinvey');
        //return kinvey.get('appdata', `events/?query={"_acl.creator":"${userId}"}`, 'kinvey');
    }

    function deleteEvent(id){
        return kinvey.remove('appdata', `events/${id}`, 'kinvey');
    }

    function editEvent(id, data){
        return kinvey.update('appdata', `events/${id}`, 'kinvey', data);
    }

    return {
        createEvent,
        showEvents,
        showEvent,
        showMyEvents,
        deleteEvent,
        editEvent
    };
})();