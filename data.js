const fs = require('fs')


const add = (id, Name, Gpa) => {

    const student = load()

    const duplicatedData = student.filter((student) => {
        return student.id === id
    })
    if (duplicatedData.length === 0) {
        student.push({
            id,
            Name,
            Gpa
        })
        save(student)
        console.log('save successfully');
    } else {
        console.log('duplicated id ');
    }
    // const save = save();

}

const load = () => {
    try {
        const student = fs.readFileSync('student.json').toString()
        return JSON.parse(student)
    } catch (e) {
        return []
    }
}

const save = (student) => {
    const saveData = JSON.stringify(student)
    fs.writeFileSync('student.json', saveData)

}
const remove = (id) => {
    const student = load()


    const studentToKeep = student.filter((el) => {
        return el.title !== title
    })

    console.log('studentInformation to keep', studentToKeep)
    save(studentToKeep)
}
const list = () => {
    const student = load()
    student.forEach((student) => {
        console.log(student.id + student.Name)

    })
}

const read = (id) => {
    const students = load()
    const student = students.find((student) => {
        return student.id === id
    })
    if (student) {
        console.log('id is ' + student.id)
        console.log('name is ' + student.Name)

    } else {
        console.log('Not found')
    }
}





module.exports = {
    add,
    save,
    load,
    remove,
    list,
    read
}