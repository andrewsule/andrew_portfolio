import stpm from './stpm 4.png'
import silver from './sliverstione.png'
import mofas from './mofass.png'
import opari from './opari.png'
import booking from './booking.jpg'
import myproject from './personal.png'


const projects = [
{
    "id": 1,
    "name": "Pharmacy Managemnt System",
    "description": "This system helps users manage their pharmacy inventory and customers. It allows tracking of stock levels, adding customer profiles, and maintaining sales records, making daily operations more efficient and organized.",
    "image": stpm,
    "technologies": ["React", "Node.js", "MongoDB"],
},{
    "id": 2,
    "name": "Silver Stone",
    "description": "This site allows customers to browse available properties and directly contact the owners for inquiries. It simplifies the process of finding and connecting with property owners, making it easier for users to explore real estate options.",
    "image": silver,
    "technologies": ["Wordpress", "SQL", "PHP"],
},{
    "id": 3,
    "name": "Mofass",
    "description": "MOFASS is a system designed for the Ministry of Foreign Affairs to record and view activities such as exemptions, scholarships, and training programs. It streamlines the management and tracking of these key activities, ensuring efficient handling of ministry-related processes.",
    "image": mofas,
    "technologies": ["React", "Node.js", "MongoDB"],
},{
    "id": 4,
    "name": "Opari Clinic",
    "description": "This system helps clinics manage patient records, appointments, and medical histories. It streamlines daily operations by enabling efficient handling of scheduling, billing, and patient data, ensuring smooth clinic management and improved patient care",
    "image": opari,
    "technologies": ["React", "Node.js", "MongoDB"],
},{
    "id": 5,
    "name": "Bookings",
    "description": "This system enables users to book bus tickets online, view available routes, and check seat availability. It simplifies the process of reserving tickets, managing schedules, and ensuring a smooth travel experience for passengers.",
    "image": booking,
    "technologies": ["React Native", "Node.js", "MongoDB"],
},
{
    "id": 6,
    "name": "This Site",
    "description": "This web application was created to showcase my skills, experience, and educational background. It also serves as a platform for potential clients or collaborators to easily reach out for further details on projects or partnerships.",
    "image": myproject,
    "technologies": ["React Js", "Vite"],
}


]

export default projects