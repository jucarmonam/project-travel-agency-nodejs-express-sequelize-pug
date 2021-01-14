import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {
    //console.log(req.body)//con esto podemos obtener los datos que vienen desde el formulario

    //Validar...

    const { nombre, correo, mensaje } = req.body;

    let error = '';

    if(!nombre.trim() || !correo.trim() || !mensaje.trim()){
        error = 'Todos los campos son obligatorios';
    }
     
    if(error !== ''){
        //Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            error,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error) 
        }
    }
}

export {
    guardarTestimonial
}