function isWeChat(){
  if(navigator.userAgent.indexOf("MicroMessenger") === -1){
    return false;
  }
  return true;
}

function isiPhone(){
  if(navigator.userAgent.indexOf("iPhone") === -1){
    return false;
  }
  return true;
}

function isAndroid(){
  if(navigator.userAgent.indexOf("Android") === -1){
    return false;
  }
  return true;
}

function isMobile(){
  return (isAndroid() || isiPhone());
}

function isDesktop(){
  if(navigator.userAgent.indexOf("Windows") === -1){
    return false;
  }
  return true;
}

export {isWeChat, isMobile, isDesktop};
