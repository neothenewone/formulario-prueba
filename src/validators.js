const edadValidator=(value)=>{

 // return value >=18 && value <=28

 
}

export { edadValidator }
const calculaEdad=(cumple)=>{
  
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

}
export {calculaEdad}