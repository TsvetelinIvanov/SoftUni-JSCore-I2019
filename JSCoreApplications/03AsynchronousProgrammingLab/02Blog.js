function attachEvents(){
    //const kinveyAppId = "kid_S1htVfcmm";
    //const kinveyAppId = "kid_B1KyOfAZe";
    const kinveyAppId = "kid_H1y9kL-_N";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    //const kinveyUsername = "peter";//for required kinvey DB
    const kinveyUsername = "Peter";//for my kinvey DB
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};

    $('#btnLoadPosts').click(loadPostsClick);
    $('#btnViewPost').click(viewPostClick);
    
    function loadPostsClick(){
        let loadPostRequest = {
            url: serviceUrl + "/posts",
            headers: authHeaders
        };

        $.ajax(loadPostRequest)
         .then(displayPosts)
         .catch(displayError);
    }

    function displayPosts(posts){
        let $posts = $('#posts');
        $posts.empty();
        for (let post of posts){
            let $optionPost = $('<option>').val(post._id).text(post.title);
            $posts.append($optionPost);
        }
    }

    function displayError(error){
        let $divError = $('<div>').text('Error: ' + error.status + ' (' + error.statusText + ')');
        $(document.body).prepend($divError);
        setTimeout(function(){
            $($divError).fadeOut(function(){
                $($divError).remove;
            });
        }, 3000);
    }

    function viewPostClick(){
        let selectedPostId = $('#posts').val();
        if (!selectedPostId){
            return;
        }

        let requestPosts = $.ajax({
            url: serviceUrl + '/posts/' + selectedPostId,
            headers: authHeaders
        });

        let requestComments = $.ajax({
            //url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,//for required kinvey DB
            url: serviceUrl + `/coments/?query={"post_id":"${selectedPostId}"}`,//for my kinvey DB
            headers: authHeaders
        });

        Promise.all([requestPosts, requestComments])
         .then(displayPostWithComments)
         .catch(displayError);
    }

    function displayPostWithComments([post, comments]){
        let $h1postTitle = $('#post-title');
        let $ulPostBody = $('#post-body');
        let $ulPostComments = $('#post-comments');
        
        $h1postTitle.text(post.title);
        $ulPostBody.text(post.body);
        $ulPostComments.empty();
        for (let comment of comments){
            let $li = $('<li>').text(comment.text);
            $ulPostComments.append($li);
        }
    }
}