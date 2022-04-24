const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function(){

    let post = $("#input").val()
    tweeter.addPost(post)
    renderer.renderPosts(tweeter.getPosts())

}


$("#posts").on('click', '.comment', function(){
    let comment = $(this).closest('.post').find('#comment-input').val()
    let postID = $(this).closest('.post').data().id
    console.log(comment)
    tweeter.addComment(postID,comment);
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on('click', '.delete', function(){
    let deletePost = $(this).closest('.post').data().id
    tweeter.removePost(deletePost)
    renderer.renderPosts(tweeter.getPosts())
    console.log(deletePost)
})

$("#posts").on('click', '.delete-comment', function(){
    let postID = $(this).closest('.post').data().id
    let commentID = $(this).closest('div').data().id
    tweeter.removeComment(postID,commentID)
    renderer.renderPosts(tweeter.getPosts())
})

