export const convertPhone = (phone)=>{
    const phoneToStr = phone.toString()

    const ddd = phoneToStr.substring(0,2)
    const prefix = phoneToStr.substring(2,7)
    const sufix = phoneToStr.substring(7,11)

    return `(${ddd}) ${prefix}-${sufix}`
}