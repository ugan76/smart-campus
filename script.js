fetch("http://api.smartcampus.local:8000/mahasiswa")
.then(response => response.json())
.then(data => {

    let output = "";

    data.forEach(mhs => {
        output += `
            <p>
                <b>${mhs.nama}</b><br>
                ${mhs.jurusan}
            </p>
        `;
    });

    document.getElementById("data-mahasiswa").innerHTML = output;

})
.catch(error => {
    console.log(error);
});
