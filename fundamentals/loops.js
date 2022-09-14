group = ['Abed', 'Ellison', 'Safa', 'Jaymen', 'Amy']

//print every member of the group
// for (var member = 0; member < group.length; member++) {
//     console.log(group[member])
// }

//Generalized form
// for (let i = 0; i < group.length; i++) {
//     console.log(group[i])
// }

//unpacked as while loop
let member = 0; //First part - Instantiate Variable
while (member < group.length) {
    console.log(group[member]); 
    member++
}
