const Comments = require('../models/commentsModel');

// Get all comments
exports.readAllComments = (req, res) => {
    Comments.find({}, (error, comments) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({
                count : comments.length,
                comments
            });
        }
    });
}

// Create a Comments
exports.createAComments = (req, res) => {
    // {
    //     title: "Mon deuxième article",
    //     content: "toto"
    // }
    let newComments = new Comments(req.body);

    newComments.save((error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(comments);
        }
    });
}


// Get a Comments
exports.readAComments = (req, res) => {
    Comments.findById(req.params.comments_id, (error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comments);
        }
    });
}

// Update a Comments
exports.updateAComments = (req, res) => {
    Comments.findByIdAndUpdate(req.params.comments_id, req.body, {new: true}, (error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comments);
        }
    });
}

// Delete a comments
exports.deleteAComments = (req, res) => {
    Post.findByIdAndDelete(req.params.comments_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Commentaire supprimé"});
        }
    });
}