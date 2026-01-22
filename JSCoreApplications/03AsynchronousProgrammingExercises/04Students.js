function createStudentAndListStudents() {
    let baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
    let kinveyUsername = "guest";
    let kinveyPassword = "guest";
    let base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);
    
    loadStudents();
    
    $("#addStudent").click(addStudent);

    function loadStudents() {
        let request = {
            url: baseUrl,
            method: "GET",
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.get(request).then(displayStudents);
    }

    function displayStudents(students) {
        let $tableResults = $("#results");
        $tableResults.find("tr").nextAll().remove();
        students = students.sort((a, b) => a.ID - b.ID);
        for (let student of students) {
            let $tr = $("<tr>");
            let $tdID = $("<td>").text(student.ID);
            let $tdFirstName = $("<td>").text(student.FirstName);
            let $tdLastName = $("<td>").text(student.LastName);
            let $tdFacultyNumber = $("<td>").text(student.FacultyNumber);
            let $tdGrade = $("<td>").text(student.Grade);
            $tr.append($tdID, $tdFirstName, $tdLastName, $tdFacultyNumber, $tdGrade);
            $tableResults.append($tr);
        }        
    }

    function addStudent(event) {
        event.preventDefault();
        let id = Number($("#ID").val());
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let facultyNumber = $("#facultyNumber").val();
        let grade = Number($("#grade").val());
        let facultyNumberPattern = /^\d+$/;
        if (firstName.trim() != "" && lastName.trim() != "" && facultyNumberPattern.test(facultyNumber)) {
            let request = {
                url: baseUrl,
                method: "POST",
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    ID: id,
                    FirstName: firstName,
                    LastName: lastName,
                    FacultyNumber: facultyNumber,
                    Grade: grade
                })
            };

            $.ajax(request)
                .then(loadStudents)
                .then(clearInputs);
        }

        function clearInputs() {
            $("#ID").val("");
            $("#firstName").val("");
            $("#lastName").val("");
            $("#facultyNumber").val("");
            $("#grade").val("");
        }
    }
}
