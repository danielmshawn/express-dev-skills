const skills = [
    {id: 545653, skill: 'HTML', learned: true},
    {id: 357643, skill: 'Python', learned: false},
    {id: 876434, skill: 'Node.js', learned: true},
    {id: 236428, skill: 'PostGreSQL', learned: false},
    {id: 964463, skill: 'CSS', learned: true}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}


function getAll() {
    return skills;
}