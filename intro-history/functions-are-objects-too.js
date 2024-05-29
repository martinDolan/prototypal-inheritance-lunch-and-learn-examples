function takeOutTrash(day) {
  return `Trash should be taken out on ${day}.`;
}

// Add a property to object 
takeOutTrash.description = `This function tells 
you which day to take out the trash.`;

// Add a method to the object
takeOutTrash.reminder = function (day) {
  return `Reminder: Take out the trash on ${day}!`;
};

console.log(takeOutTrash('Monday')); 
// Trash should be taken out on Monday.

console.log(takeOutTrash.description); 
// This function tells you which day to take out the trash.

console.log(takeOutTrash.reminder('Monday')); 
// Reminder: Take out the trash on Monday!
