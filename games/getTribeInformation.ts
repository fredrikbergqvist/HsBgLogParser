export function getTribeInformation(avail:string = ""){
  const availValues = avail.replace("Available:", "").replace("Unavailable:", "").split(";");
  let available:Array<string> = [];
  let unavailable:Array<string> =[]
  if(availValues.length === 2){
    available= availValues[0].split(",").map(a => a.trim());
      unavailable=availValues[1].trim().split(",").map(u => u.trim());
  }
  return {
    available,
    unavailable
  }
}
