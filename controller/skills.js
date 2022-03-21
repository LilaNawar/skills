const { redirect } = require('express/lib/response')
const Skill = require('../models/skill')

//console.log(skills[1])

function index (req, res) {
  //res.send(Skill.showAll()) // sends them as an ojbect to the page
  res.render("../app/views/index.ejs", {data:Skill.showAll()});
  
}

function showSkill(req, res) {
  res.send(Skill.showSkill(req.params.id))
}


function newSkill(req, res){
  res.render('../app/views/new.ejs',{data:Skill.showAll()})
}

function addNewSkill(req, res){
  Skill.showAll().push(req.body)
  res.redirect('/skills')
}

function delete_skill(req, res){
  Skill.showAll().splice(req.query.id, 1)
  res.redirect('/skills');
}



module.exports = {index, showSkill,newSkill,addNewSkill, delete_skill}