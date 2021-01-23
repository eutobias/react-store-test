const lockScroll = () => {
  document.getElementsByTagName('body')[0].classList.add('lockScroll')
}
const unLockScroll = () => {
  document.getElementsByTagName('body')[0].classList.remove('lockScroll')
}

export { lockScroll, unLockScroll }