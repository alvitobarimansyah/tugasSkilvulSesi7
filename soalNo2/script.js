const team = ['Ka Thoriq', 'Alvito', 'Ka Danu', 'Ka Luthfi'];
const newTeam = team.splice(2,3);
team[0] = 'Ka Thoriq (Leader)';
newTeam[0] = 'Ka Danu (Leader)';

document.write('Team 1 :');
document.write('<ol>');
team.forEach(team1 => {
    document.write(`<li> ${team1} </li>`);
});
document.write('</ol>');
document.write('Team 2 :');
document.write('<ol>');
newTeam.forEach(team2 => {
    document.write(`<li> ${team2} </li>`);
});
document.write('</ol>');
