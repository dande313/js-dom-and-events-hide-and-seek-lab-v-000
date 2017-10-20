function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nest = "nested", target = "target"){
  return document.querySelector(`#${nest} .${target}`);
}

function increaseRankBy(n , list = "ranked-list"){
  let rankedLists = document.querySelectorAll(`.${list}`)
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(topLayer = "grand-node") {
  let nest = document.getElementById(`${topLayer}`);
  let child
  while(child = nest.children[0]){
    nest = child;
  }
  return nest
}
