
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
repeatString("yo", 3, " ") // "yo yo yo"
repeatString("yo", 3, ",")  // "yo,yo,yo"
repeatString("yo", 3, ", ") // "yo, yo, yo"
repeatString("yo", 0, ", ") // ""
repeatString("yo", 1, ", ") // "yo"
function repeatString(word, multiply , space){
    return Array(multiply).fill(word).join(space)
}

console.log(repeatString("yo", 3, " "))
// 2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

// checkStart("Incubator", "inc")   // => true
// checkStart("Incubator", "yo")    //=> false
const checkStart = (string,pieceOfString) => string.toLowerCase().startsWith(pieceOfString.toLowerCase())
// console.log(checkStart("Incubator", "inc"))
// function checkStart(arg1, arg2){
//     let arr1 = arg1.split('')
//     let arr2 = arg2.split('')
//     // checkStart("Incubator", "inc").includes("Incubator");   // => true
//     // checkStart("Incubator", 1).includes("Incubator",1);
//     return arr1.includes(arr2)
// }
// console.log(arr1)
// console.log(checkStart(arr1.includes(arr2)))


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str,count) => str.slice(0,count) + '...'

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null
function getMinLengthWord(str){
    if(typeof str !== 'string' || str === ""){
        return null;
    }else{
        return str.split(' ').reduce((a,b)=>(b.length < a.length) ? b:a);
    }
}
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (str) => {
    let result = ''
    for (let i = 0; i < str.length;i++){
        result += (str[i - 1] === ' ' || i === 0) ? str[i].toUpperCase() : str[i].toLowerCase()
    }
    return result
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке
const isIncludes = (str,subStr) => {
    const has = new Set();

    for(let i = 0; i < subStr.length; i++)
        if(str.toLowerCase().includes(subStr.toLowerCase()[i]))
            has.add(subStr[i]);

    return has.size === subStr.length;
};

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




