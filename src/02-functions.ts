import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
// console.log(highestExtension(colleagues.current));

//  adds a colleague to an array, and setting their extensins number to the highest extension, plus 1.
function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string
): void {
    const highest = highestExtension(cs);

    const colleague = {
        name: name,
        department: department,
        contact:{
            email: email,
            extension: highest.contact.extension + 1,
        },
    };

    cs.push(colleague);
}

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1:Colleague, c2:Colleague) => number,
    max? : number
): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email}));
    return fullResult.slice(0, end)
    
}

function findFriends(
    friends: Friend[],
    finder: (f:Friend) => boolean
): string[] {
    const result = friends
    .filter(finder)
    .map((friend) => friend.name);

    return result;
}

function addInterest(
    friend: Friend,
    interest: string
): string[] {
    if (!friend.interests) {
        friend.interests = [];
    }
    friend.interests.push(interest);
    return friend.interests;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));
console.log(addInterest(friends[0], 'Politics'))
