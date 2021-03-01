// put all the panels in a NodeList, iterate through the NodeList and add an event listener. everytime you click on a panel, all active classes are removed from the panel and the panel you clicked on has the active class added to it

let panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
