const router = require('express').Router();
const Exercise = require('./../models/exercise.model');

// fetch all data
router.route('/').get( (req, res ) => {
    Exercise.find()
     .then( exercises => res.json(exercises))
     .catch( err => res.status(4000).json("Error :" + err));
});

// add new item
router.route('/add').post( (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
         description,
          duration,
           date,
         });

    newExercise.save()
      .then( () => res.json('Exercise addedd successfully.'))
      .catch( err => res.status(400).json("Error2: " + err));
});

// fetch single item
router.route('/edit/:id').get( (req, res) => {
    Exercise.findById(req.params.id)
     .then( exercise => res.json(exercise))
     .catch( err => res.status(400).json("Error: "+ err));
});

// delete item
router.route('/delete/:id').delete( (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
     .then( () => res.json('item deleted!!'))
     .catch( err => res.status(400).json('Error : '+ err));
});

// update item
router.route('/update/:id').post( (req, red) => {
    Exercise.findByIdAndUpdate(req.params.id)
     .then( exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
         .then( () => res.json('item updated successfully'))
         .catch( err => res.status(400).json('Error :' + err));
     })
     .catch( err => res.status(400).json('Error : '+ err))
})



module.exports = router;