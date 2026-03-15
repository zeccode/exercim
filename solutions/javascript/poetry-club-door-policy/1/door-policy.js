
export function frontDoorResponse(line) {
  return line[0]
}


export function frontDoorPassword(word) {
  const phrase = word.slice(1);
  const initial = word[0];
  return initial.toUpperCase() + phrase.toLowerCase()
}

export function backDoorResponse(line = 'Stands so high') {
  const phrase = line.trim()
  const index = phrase.length - 1
  return phrase[index]
}


export function backDoorPassword(word) {
  const phrase = word.slice(1);
  const initial = word[0];
  return initial.toUpperCase() + phrase.toLowerCase() + ', please'
}
