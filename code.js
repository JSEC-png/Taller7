var val1, val22, val3;
$('#fechaNacimiento').change(function (e) { 
    e.preventDefault();
    var f= $('#fechaNacimiento').val();
    var today = new Date;
    const date1 = new Date(f);
    const diffTime = Math.abs(today - date1);
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 *365)); 
    $('#edad').val(diffYears-1);
});

$('#yess').change(function (e) { 
   $('#contagio').addClass('d-block');   
});

$('#noo').change(function (e) { 
    $('#contagio').removeClass('d-block');
   $('#contagio').addClass('d-none');
   $('#cuales').removeClass('d-block');
   $('#cuales').addClass('d-none'); 
   $('#yes').prop('checked',false);
   $('#no').prop('checked',false);     
});

$('#yes').change(function (e) { 
   $('#cuales').addClass('d-block');   
});

$('#no').change(function (e) { 
    $('#cuales').removeClass('d-block');
   $('#cuales').addClass('d-none');   
});

$('#usuario').keyup(function (e) { 
    var x =$('#usuario').val();
    var val= x.match(/[!"·$%&/()|@#~€¬/*+.`+ç´^*Ç¨]/)
    if (val != null)
    {
        $('#pUsuario').html('El usuario no puede contener caracteres extraños'); 
        val1= false;
    }
    else
    {
        $('#pUsuario').html('');
        val1=true;
    }   
});
$('#contrasena').keyup(function (e) { 
    var x =$('#contrasena').val();
    var val1= x.match(/[a-z]/);
    var val2= x.match(/[A-Z]/);
    var val3= x.match(/[0-9]/);  
    val22=false;
    $('#pcontrasena').html('La contraseña debe tener una longitud mínima de 8 caracteres, que incluya minúsculas, mayúsculas y números');
    if (val1 != null && val2 != null && val3 != null && x.length >= 8)
    {
        val22=true;
        $('#pcontrasena').html('Contraseña válida');
    }   
});
$('#confirmacion').change(function () { 
    var x = $('#contrasena').val();
    var y = $('#confirmacion').val();
    if (x == y)
    {
        val3=true;
        $('#pconfirmacion').html('Contraseñas coinciden');
    }else 
    {
        val3=false;
        $('#pconfirmacion').html('Las contraseñas no coinciden');
    }
    
});
$(document).click(function (e) { 
    if (val1 == true && val22 == true && val3 == true)
    {
        $('#registro').prop('disabled',false)
    }else 
    {
        $('#registro').prop('disabled',true)
    }
    
});



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




