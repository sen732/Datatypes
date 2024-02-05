document.addEventListener("DOMContentLoaded", function () {
    const subjectsData = [
        { subjectName: "Comprog", professor: "Dr. Jan" },
        { subjectName: "Web Design", professor: "Prof. Vin" },
        { subjectName: "Algorthm", professor: "Mr. Sen" },
    ];

    const subjectsList = document.getElementById("subjectsList");

    for (let i = 0; i < subjectsData.length; i++) {
        const subject = subjectsData[i];
        const listItem = document.createElement("li");
        listItem.innerText = `${subject.subjectName} - Professor: ${subject.professor}`;
        subjectsList.appendChild(listItem);
    }
});

function goToProfilePage() {
    window.location.href = "index.html";
}
