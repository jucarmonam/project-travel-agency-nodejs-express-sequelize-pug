import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();//Con router hacemos referencia a la app que tenemos en el index principal ya que solo podemos tener una instancia de esta, osea solo una instancia de express

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);//con los : nos permite es crear como una variable dinamica para tener diferentes routas que van a ser muy parecidad pero sin tener que generar cada router.get y esta informacion se la pasara el controller

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);

export default router;