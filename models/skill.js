const req = require("express/lib/request")
const res = require("express/lib/response")


const skills = [
    { skill: 'typinng', years: 5 }, // 0
    { skill: 'coding', years: 2 }, // 1
    { skill: 'sleeping', years: 28 } // 2
  ]


function showAll(){
    return skills
}

function showSkill(id){
    return skills[id]
}


module.exports = {showAll,showSkill}