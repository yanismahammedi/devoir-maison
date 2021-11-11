const commentsController = require('../controllers/commentsController');

module.exports = (server) => {
    server.route("/comments")
    .get(commentsController.readAllComments) // Get all Comments
    .comments(commentsController.createAComments); // Create a Comments
    
    server.route("/comments/comments_id") // req.params.Comments_id
    .get(commentsController.readAComments) // Get one Comments
    .put(commentsController.updateAComments) // Update one Comments
    .delete(commentsController.deleteAComments); // Delete one Comments
}