export function addClassHidden(element) {
  if (element) {
    element.classList.add('visually-hidden');
  }
}

export function removeClassHidden(element) {
  if (element) {
    element.classList.remove('visually-hidden');
  }
}
