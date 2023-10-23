import { useForm } from "react-hook-form"
import "./form.css"

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
  })

  const onSubmit = (data) => {
    // console.log(data)
    message()
  }

  function message() {
    reset()

    success.style.display = "block"

    setTimeout(() => {
      success.style.display = "none"
    }, 4000)
  }

  return (
    <div className="contact">
      <section className="formulario">
        <h2>
          <strong>Contactanos</strong>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="data">
            <div className="campo">
              <label>
                <strong>Nombre</strong>
              </label>
              <input
                type="text"
                {...register("nombre", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i,
                })}
              />
              <hr />
              {errors.nombre?.type === "required" && (
                <p>El campo nombre es requerido</p>
              )}
              {errors.nombre?.type === "maxLength" && (
                <p>El campo nombre debe tener menos de 30 caracteres</p>
              )}
              {errors.nombre?.type === "pattern" && (
                <p>El formato del nombre es inválido</p>
              )}
            </div>

            <div className="campo">
              <label>
                <strong>Apellido</strong>
              </label>
              <input
                type="text"
                {...register("apellido", {
                  required: true,
                  maxLength: 30,
                  pattern:
                    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i,
                })}
              />
              <hr />
              {errors.apellido?.type === "required" && (
                <p>El campo apellido es requerido</p>
              )}
              {errors.apellido?.type === "maxLength" && (
                <p>El campo apeliido debe tener menos de 30 caracteres</p>
              )}
              {errors.apellido?.type === "pattern" && (
                <p>El formato del apellido es inválido</p>
              )}
            </div>
          </div>

          <div className="data">
            <div className="campo">
              <label>
                <strong>E-mail</strong>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              <hr />
              {errors.email?.type === "required" && (
                <p>El campo email es requerido</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>El formato del email es inválido</p>
              )}
            </div>

            <div className="campo">
              <label>
                <strong>Teléfono</strong>
              </label>
              <input
                type="text"
                {...register("telefono", {
                  required: true,
                  minLength: 10,
                  pattern:
                    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i,
                })}
              />
              <hr />
              {errors.telefono?.type === "required" && (
                <p>El campo teléfono es requerido</p>
              )}
              {errors.telefono?.type === "minLength" && (
                <p>
                  El campo teléfono debe tener al menos 10 caracteres numéricos
                </p>
              )}
              {errors.telefono?.type === "pattern" && (
                <p>
                  El formato del teléfono es inválido (poner sin espacios ni
                  carácteres especiales)
                </p>
              )}
            </div>
          </div>

          <div className="campo">
            <label>
              <strong>Mensaje</strong>
            </label>
            <textarea
              className="textinput"
              {...register("mensaje", {
                required: true,
              })}
            ></textarea>
            <hr />
            {errors.mensaje?.type === "required" && (
              <p>El campo mensaje es requerido</p>
            )}
          </div>

          <button type="submit" value="Enviar">
            Enviar
          </button>
          <div className="message">
            <div className="success" id="success">
              Tu mensaje ha sido enviado con éxito
            </div>
          </div>
        </form>
      </section>

      <section className="info">
        <div className="info-section">
          <p>
            <strong>DIRECCIÓN:</strong>
          </p>
          <p>ACEVEDO 745</p>
          <p>CP 1414</p>
          <p>BUENOS AIRES, ARGENTINA</p>
        </div>
        <div className="info-section">
          <p>
            <strong>TELÉFONO:</strong>
          </p>
          <p>011 4772-9446</p>
        </div>
        <div className="info-section">
          <p>
            <strong>MAIL</strong>
          </p>
          <p>contacto@machadocicala.com.ar</p>
        </div>
        <div className="info-section">
          <p>
            <strong>WHATSAPP</strong>
          </p>
          <p>011 4772-9446</p>
        </div>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.9578091878625!2d-58.43735374604663!3d-34.59564913863166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca75ac4d5a01%3A0x9b839cae3f5f538d!2sAcevedo%20745%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1688428735566!5m2!1ses-419!2sar"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Form
