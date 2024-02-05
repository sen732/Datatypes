document.addEventListener("DOMContentLoaded", function () {
    const studentData = {
        name: "vin sen",
        grade: "BSIT-2",
        enrolledDate: "2022-01-01",
        hobbies: ["History", "Video Games", "Church"]
    };

    document.getElementById("name").innerText = studentData.name;
    document.getElementById("grade").innerText = studentData.grade;
    document.getElementById("enrolledDate").innerText = studentData.enrolledDate;
    document.getElementById("hobbies").innerText = studentData.hobbies.join(", ");
});

function goToSubjectsPage() {
    window.location.href = "subjects.html";
}
