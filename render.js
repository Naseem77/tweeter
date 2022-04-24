const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty();
        for(let post of posts){
            $("#posts").append(`<div class="post" data-id="${post.id}">${post.text}
            <div class=comments>${renderComments(post.comments)}</div>
            <input id="comment-input" type="text" placeholder="what do you think?">
            <button class="comment">Comment</button>
            <button class="delete">Delete Post</button>
            </div><br>`)

        }
    }

    const renderComments = function(comments){
        let totalComments = ""
        for(comment of comments){
            totalComments += `<div data-id="${comment.id}"><span class="delete-comment">X</span>${comment.text}</div>`
        }
        return totalComments

    }

    return {renderPosts: renderPosts}
}