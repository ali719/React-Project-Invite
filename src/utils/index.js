/**
 * Created by Administrator on 2018/11/2.
 */

export function getRedirectPath(type,header) {
  let path ='';
  
  if (type ==='boss'){
    path = '/boss'
  }else {
    path ='/dashen;'
  }
  
  if (!header){
    path += 'Info';
  }
  
  return path;
}