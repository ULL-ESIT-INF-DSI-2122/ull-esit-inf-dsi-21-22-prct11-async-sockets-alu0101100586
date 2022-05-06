/**
 * Type que es una petición de la solicitud
 * @param type tipo de solicitud
 * @param user usuario que hace la peticion
 * @param title titulo de la nota
 * @param text cuerpo de la nota
 * @param color color de la nota
 */
export type CommandRequest = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  user: string;
  title?: string;
  text?: string;
  color?: string;
}

/**
 * Type que representa la respuesta del servidor
 * @param msg representa las solicitudes
 */
export type ResponseType = {
  msg: string;
}