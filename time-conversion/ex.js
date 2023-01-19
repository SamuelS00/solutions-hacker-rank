function timeConversion(s) {
  const isAM = s.includes('AM')

  const t = { 
    hour: s.slice(0, 2), 
    minute: s.slice(3, 5),
    seconds: s.slice(6, 8)
  }  

  if (!isAM) {
    const newHour = t.hour === '12' ? '12' : `${+t.hour + 12}`

    return `${newHour}:${t.minute}:${t.seconds}`
  } else {
    let newHour = t.hour === '00' ? '00': t.hour 

    newHour = +t.hour >= 12 ? `0${+t.hour - 12}`: t.hour

    return `${newHour}:${t.minute}:${t.seconds}`
  }
}


console.log(timeConversion('07:01:45PM'))


// AM -> 00:00 até 12:00

// PM -> 12:00 até 00:00