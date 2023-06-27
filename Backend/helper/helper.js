const bcrypt = require('bcryptjs');

const hashedPassword = async(password) => {
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(password, salt);
    // return hashPassword;
    try {
      const salt = await bcrypt.genSalt(10); // 10 rounds
      return await bcrypt.hash(password, salt);
  } catch (error) {
      throw new Error("Hashing failed", error);
  }
  };

const distanceToHub = ( hubLat, hubLon, userLat, userLon, ) => {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (userLat-hubLat) * Math.PI / 180;
    var dLon = (userLon-hubLon) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(hubLat * Math.PI / 180 ) * Math.cos(userLat * Math.PI / 180 ) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    // if (d>1) return Math.round(d)+"km";
    // else if (d<=1) return Math.round(d*1000)+"m";
    var dKM = Math.round(d) // distance in kilometers
    var dMeters =  Math.round(d*1000)  // distance in kilometers
    // return d;
    return dMeters;
  }
  
  // hubLattitude =  9.905605 
  // hubLongitude =  8.887248

  // userLattitude = 9.909458
  // userLongitude = 8.882012

  // console.log(distanceToHub(hubLattitude,hubLongitude,userLattitude,userLongitude))

  module.exports =  { hashedPassword, distanceToHub } 