// Write your code here!
const element = document.createElement("div");
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

main.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.id = 'Victory'
newHeader.textContent = 'Tweezy is the champion';
