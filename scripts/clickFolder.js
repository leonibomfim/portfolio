const folders = ['bio', 'interests', 'education', 'experience', 'hard', 'soft', 'sports', 'games'];

function clickFolder(id) {
    folders.forEach(folder => {
        const elementSVG = document.getElementById(`${folder}-svg`);

        if (elementSVG) {
            if (id === folder) {
                elementSVG.classList.add("active");
            } else {
                elementSVG.classList.remove("active");
            }       
        }

        const elementTable = document.getElementById(`${folder}-table`);

        if (elementTable) {
            if (id === folder) {
                elementTable.classList.add("show");
            } else {
                elementTable.classList.remove("show");
            }       
        } 
    });
}
