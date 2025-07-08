function normalizeName(name) {
  return name
    .trim()                          
    .replace(/\s+/g, ' ')             
    .toLowerCase()                
    .split(' ')           
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })                               
    .join(' ');              
}
console.log(normalizeName(" aNNA mARie ")); // "Anna Marie"


//////

function isValidEmail(email) {
  const regex = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/i;
  return regex.test(email);
}

console.log(isValidEmail("test.user-1@example.co")); // true
console.log(isValidEmail("bad@@example..com"));      // false


/////

const post = "JS це круто! #javascript #web_dev #100DaysOfCode";

const hashtags = post.match(/#[\wа-яіїєґ]+/gi);

console.log(hashtags); 
// ["#javascript", "#web_dev", "#100DaysOfCode"]


/////

const raw = "380501234567";

const formatted = raw.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/, 
    function(_, p1, p2, p3, p4, p5) {
  return `+${p1} (${p2}) ${p3}-${p4}-${p5}`;
});

console.log(formatted); 

