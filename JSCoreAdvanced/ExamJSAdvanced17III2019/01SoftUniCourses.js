function solve() {
    let $inputJSFundamentals = $('input[name="js-fundamentals"]');
    let $inputJSAdvanced = $('input[name="js-advanced"]');
    let $inputJSApplications = $('input[name="js-applications"]');
    let $inputJSWeb = $('input[name="js-web"]');
    let $inputRadioOnline = $('input[value="online"]');
    let $buttonSignMeUp = $('button');
 
    $buttonSignMeUp.on('click', addCourses);
 
    function addCourses() {            
       let $ulMyCourses = $('#myCourses div[class="courseBody"] ul');
       let $pCost = $('#myCourses div[class="courseFoot"] p'); 
       
       let isCheckedInputJSFundamentals = $inputJSFundamentals.is(':checked');
       let isCheckedInputJSAdvanced = $inputJSAdvanced.is(':checked');
       let isCheckedInputJSApplications = $inputJSApplications.is(':checked');
       let isCheckedInputJSWeb = $inputJSWeb.is(':checked');
       let isCheckedinputRadioOnline = $inputRadioOnline.is(':checked');      
 
       // let isCheckedInputJSFundamentals;
       // let isCheckedInputJSAdvanced;
       // let isCheckedInputJSApplications;
       // let isCheckedInputJSWeb;
 
       // $inputJSFundamentals.input(function() {
       //    if ($(this).is(':checked'))
       //    isCheckedInputJSFundamentals = true;
       //  });
 
       //  $inputJSAdvanced.change(function() {
       //    if ($(this).is(':checked'))
       //    isCheckedInputJSAdvanced = true;
       //  });      
 
       let cost = 0;
       if (isCheckedInputJSFundamentals) {
          let $li = $('<li>');
          $li.text('JS-Fundamentals');
          $ulMyCourses.append($li);
          cost += 170;
       }
 
       if (isCheckedInputJSAdvanced) {
          let $li = $('<li>');
          $li.text('JS-Advanced');
          $ulMyCourses.append($li);
          cost += 180;
       }
 
       if (isCheckedInputJSApplications) {
          let $li = $('<li>');
          $li.text('JS-Applications');
          $ulMyCourses.append($li);
          cost += 190;
       }
 
       if (isCheckedInputJSWeb) {
          let $li = $('<li>');
          $li.text('JS-Web');
          $ulMyCourses.append($li);
          cost += 490;
       }
 
       if (isCheckedInputJSFundamentals && isCheckedInputJSAdvanced) {
          cost -= 180 * 0.1;
       }
 
       if (isCheckedInputJSFundamentals && isCheckedInputJSAdvanced && isCheckedInputJSApplications) {
          cost -= 31.32;
       }
       
       if (isCheckedinputRadioOnline) {
          cost -= cost * 0.06;
       }
 
       if (isCheckedInputJSFundamentals && isCheckedInputJSAdvanced && isCheckedInputJSApplications && isCheckedInputJSWeb) {
          let $li = $('<li>');
          $li.text('HTML and CSS');
          $ulMyCourses.append($li);
       }
 
       cost = Math.floor(cost);
 
       $pCost.text(`Cost: ${cost}.00 BGN`);
    } 
 }

 //in Judge must be paste without this below:
 solve();
