$(document).ready(function() {
    $('#get-all-digimon').click(function() {
        $.ajax({
            url: 'https://digimon-api.vercel.app/api/digimon',
            type: 'GET',
            success: function(data) {
                mostrarDigimones(data);
            },
            error: function(xhr, status, error) {
                console.error('Error al obtener los datos:', error);
            }
        });
    });

    function mostrarDigimones(digimones) {
        var digimonList = '';
        digimones.forEach(function(digimon) {
            digimonList += `
                <div class="digimon">
                    <h2>${digimon.name}</h2>
                    <img src="${digimon.img}" alt="${digimon.name}">
                    <p>Nivel: ${digimon.level}</p>
                    <p>Tipo: ${digimon.type}</p>
                </div>
            `;
        });
        $('#digimonList').html(digimonList);
    }
});
    
    
