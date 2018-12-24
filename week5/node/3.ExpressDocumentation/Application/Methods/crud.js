const express = require('express');
const Joi = require('joi');
const router = express.Router();
const app=express();
app.use(express.json());
const courses = [
  { id: 1, name: 'course1' },  
  { id: 2, name: 'course2' },  
  { id: 3, name: 'course3' },  
];
router.get('/', (req, res) => {
  res.send(courses);
});
router.post('/', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');    

  const { error } = validateCourse(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  course.name = req.body.name; 
  res.send(course);
});
router.delete('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
}
app.use('/',router);
app.listen(7777, function () {
    console.log('Listening on port: 7777' );
});
/*
  we can implement app.get() ,app.post() ... simply by replacing router.get() with app.get()
and not calling router  in app.use() method 
*/
