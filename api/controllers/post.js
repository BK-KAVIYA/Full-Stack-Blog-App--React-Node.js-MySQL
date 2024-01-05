export const addPost = (req, res) => {
    const post = req.body;
    db.query('INSERT INTO posts SET ?', post, (err, result) => {
        if (err)
            console.log(err);
        else
            res.send('Values Inserted');
    });
}