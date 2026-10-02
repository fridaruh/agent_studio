/**
 * Outlook "book with me" scheduler. Every "Contáctanos" CTA on the site points here.
 * Kept in one place so the booking code only has to change once.
 */
export const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/90e5e6e996334c7c8b34b1a749e7c039@aicsolutions.mx/meetingtype/UKTphYVegUuWbG5239CHdw2?bookingcode=68329955-fca3-4c70-bcce-d44697386d26&anonymous&ismsaljsauthenabled&ep=mlink'

/** Pegar aquí la URL de embed del VSL (YouTube/Vimeo/Loom/Wistia). Vacío = placeholder. */
export const VSL_VIDEO_URL = 'https://www.loom.com/embed/fff650be3a28421d8680223e26589d79'

/** Video de la variante de capacidad comercial. */
export const LEADSB_VSL_VIDEO_URL = 'https://www.loom.com/embed/df26176b32444586a3533ec762bcdeb0'

/** Widget de reservas de LeadConnector usado en /leadsA y /leadsB. */
export const BOOKING_WIDGET_ID = 'mUTSSHtUTK31gNA7Zv7L'
export const BOOKING_WIDGET_URL = `https://api.leadconnectorhq.com/widget/booking/${BOOKING_WIDGET_ID}`

/** URL de embed del video de preparación pre-llamada (Loom). */
export const PRECALL_VIDEO_URL = 'https://www.loom.com/embed/9afadce4882e49a5899d6d373f4eebfc'
