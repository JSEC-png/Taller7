$(document).ready(function () {
    var datos;

$.ajax({
    type: "GET",
    url: "https://www.datos.gov.co/api/views/xdk5-pm3f/rows.json?accessType=DOWNLOAD",
    data: "data",
    dataType: "json",
    success: function (response) {
        
         datos = response.data;
        

        d=[];
       
        for(var indice of datos)
        {
            if(d.indexOf(indice[10])==-1)
            {
                $('#departamentos').append
                (
                    `<option value="${indice[10]}">${indice[10]}</option>`
                );

                    d.push(indice[10]);

            }
        }

        $('#departamentos').change(function () { 
    
            valor=this.options[this.selectedIndex].value;
            console.log(valor);
            municipios=$("#municipios");
            $('#municipios').html("");
            $('#selectmun').css('display', 'block');

            for(var indice of datos)
            {
                
                if(indice[10]==valor)
                
                municipios.append(
                    `<option value="${indice[12]}">${indice[12]}</option>`
                );
            }
            
        });

        

    }
});




});