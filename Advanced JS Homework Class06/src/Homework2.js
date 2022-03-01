fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then(response => response.json())
.then(data => {
        console.log(data);
        let studentsWithAverageGrade = data.filter(s => s.averageGrade > 3);
        let femaleStudentsWithAverage = data.filter(f => f.gender == "Female" && f.averageGrade == 5);
        let maleStudentsInSkopjeAgeOver18 = data.filter(m => m.gender == "Male" && m.age > 18 && m.city == "Skopje");
        let femaleStudentsAverageGradesAgeOver24 = data.filter(f => f.gender == "Female" && f.age > 24);
        let maleStudentsAverageGradesOver2 = data.filter(m => m.gender == "Male" && m.firstName.startsWith("B") && m.averageGrade > 2);
        console.log(studentsWithAverageGrade);
        console.log(femaleStudentsWithAverage);
        console.log(maleStudentsInSkopjeAgeOver18);
        maleStudentsInSkopjeAgeOver18.forEach(i => console.log(`${i.firstName} ${i.lastName}`));
        console.log(femaleStudentsAverageGradesAgeOver24);
        femaleStudentsAverageGradesAgeOver24.forEach(i => console.log(`${i.firstName} ${i.lastName} ${i.averageGrade}`));
        console.log(maleStudentsAverageGradesOver2);
    })
    .catch((error) => {
        console.log(error);
});
