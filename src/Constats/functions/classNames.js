export default (name, tab)=>{
  const classNames=["header__tab"]
  if(name === tab){
      classNames.push("active")
  }
  return classNames.join(' ')
}